const selling_ctx = document.getElementById("selling_chart");

let selling_datasets = [];

products_data.forEach((e, i) => {
  if (e.sold_num > 0) {
    selling_datasets.push({
      label: e.name,
      data: [
        {
          x: e.consideration_num,
          y: e.purchase_rate,
          r: e.sold_num,
        },
      ],
      backgroundColor: [backgroundColors[i]],
      borderColor: [borderColors[i]],
    });
  } else {
    selling_datasets.push({
      label: e.name,
      data: [
        {
          x: e.consideration_num,
          y: e.purchase_rate,
          r: 12,
        },
      ],
      backgroundColor: [backgroundColors[i]],
      borderColor: [borderColors[i]],
    });
  }
});

const selling_chart_data = {
  datasets: selling_datasets,
};

const selling_chart = new Chart(selling_ctx, {
  type: "bubble",
  data: selling_chart_data,
  options: {
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: {
          color: "rgba(0, 0, 0, 0.2)",
        },
        title: {
          display: true,
          text: "Purchase Rate (%)",
          font: {
            size: 15,
          },
        },
      },
      x: {
        min: 0,
        grid: {
          color: "rgba(0, 0, 0, 0.2)",
        },
        title: {
          display: true,
          text: "Visitors",
          font: {
            size: 15,
          },
        },
      },
    },
  },
});

// console.log(selling_datasets);
// console.log(selling_datasets[0].data[0]);
// update selling_chart

function get_selling() {
  selling_datasets[0].data[0].x = products_data[0].consideration_num;
  selling_datasets[0].data[0].y = products_data[0].purchase_rate;
  selling_datasets[0].data[0].r = products_data[0].sold_num;
  selling_chart.update();
}

setInterval(get_selling, 1000);
