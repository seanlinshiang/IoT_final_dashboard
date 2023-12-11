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
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 205, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(54, 162, 235, 0.5)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
      ],
      borderWidth: 1,
    },
  ],
};

const purchase_config = {
  type: "bar",
  data: purchase_chart_data,
  options: {
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
