const selling_ctx = document.getElementById("selling_chart");

let selling_datasets = [];
let backgroundColor = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(255, 159, 64, 0.5)",
  "rgba(255, 205, 86, 0.5)",
  "rgba(75, 192, 192, 0.5)",
  "rgba(54, 162, 235, 0.5)",
];

products_data.forEach((e, i) => {
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
      backgroundColor: [backgroundColor[i]],
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
      backgroundColor: [backgroundColor[i]],
    });
  }
});

const selling_chart_data = {
  datasets: selling_datasets,
  //   backgroundColor: [
  //     "rgba(255, 99, 132, 0.2)",
  //     "rgba(255, 159, 64, 0.2)",
  //     "rgba(255, 205, 86, 0.2)",
  //     "rgba(75, 192, 192, 0.2)",
  //     "rgba(54, 162, 235, 0.2)",
  //   ],
  //   borderColor: [
  //     "rgb(255, 99, 132)",
  //     "rgb(255, 159, 64)",
  //     "rgb(255, 205, 86)",
  //     "rgb(75, 192, 192)",
  //     "rgb(54, 162, 235)",
  //   ],
};

const selling_chart = new Chart(selling_ctx, {
  type: "bubble",
  data: selling_chart_data,
  options: {},
});

// console.log(selling_datasets);
// console.log(selling_datasets[0].data[0]);
// update selling_chart

function get_selling() {
  selling_datasets[0].data[0].x = products_data[0].average_purchase_time;
  selling_datasets[0].data[0].y = products_data[0].average_stop_time;
  selling_datasets[0].data[0].r = products_data[0].sold_num;
  selling_chart.update();
}

setInterval(get_selling, 1000);
