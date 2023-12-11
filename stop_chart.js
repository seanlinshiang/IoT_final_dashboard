const stop_ctx = document.getElementById("stop_chart");

const stop_labels = [];
const stop_data = [];
products_data.forEach((e) => {
  stop_labels.push(e.name);
  stop_data.push(e.average_stop_time);
});

const stop_chart_data = {
  labels: stop_labels,
  datasets: [
    {
      data: stop_data,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const stop_config = {
  type: "bar",
  data: stop_chart_data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
  },
};
const stop_chart = new Chart(stop_ctx, stop_config);

// update stop_chart
function get_stop() {
  stop_data[0] = products_data[0].average_stop_time;
  stop_chart.update();
}

setInterval(get_stop, 1000);
