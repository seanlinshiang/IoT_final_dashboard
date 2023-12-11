const selling_ctx = document.getElementById("selling_chart");

let selling_datasets = [];

products_data.forEach((e) => {
  if (e.sold_num > 0) {
    selling_datasets.push({
      label: e.name,
      data: [
        {
          x: e.average_purchase_time,
          y: e.average_stop_time,
          r: e.sold_num,
        },
      ],
    });
  } else {
    selling_datasets.push({
      label: e.name,
      data: [
        {
          x: e.average_purchase_time,
          y: e.average_stop_time,
          r: 12,
        },
      ],
    });
  }
});

const selling_chart_data = {
  datasets: selling_datasets,
};

const selling_chart = new Chart(selling_ctx, {
  type: "bubble",
  data: selling_chart_data,
  options: {},
});

console.log(selling_datasets);
console.log(selling_datasets[0].data[0]);
// update selling_chart
function get_selling() {
  selling_datasets[0].data[0].x = products_data[0].average_purchase_time;
  selling_datasets[0].data[0].y = products_data[0].average_stop_time;
  selling_datasets[0].data[0].r = products_data[0].sold_num;
  selling_chart.update();
}

setInterval(get_selling, 1000);
