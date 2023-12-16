const purchase_ctx = document.getElementById("purchase_chart");

const purchase_labels = [];
const purchase_data = [];
products_data.forEach((e) => {
  purchase_labels.push(e.name);
  purchase_data.push(e.average_purchase_time);
});

const purchase_chart_data = {
  labels: purchase_labels,
  datasets: [
    {
      data: purchase_data,
      backgroundColor: backgroundColors,
      borderColor: borderColors,
      borderWidth: 1,
    },
  ],
};

function sort_purchase_data() {
  purchase_data.sort();
  purchase_chart_data.labels;
}

const purchase_config = {
  type: "bar",
  data: purchase_chart_data,
  options: {
    scales: {
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.2)",
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.2)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
  },
};
const purchase_chart = new Chart(purchase_ctx, purchase_config);

// update purchase_chart
function get_purchase() {
  purchase_data[0] = products_data[0].average_purchase_time;
  purchase_chart.update();
}

setInterval(get_purchase, 1000);
