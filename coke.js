const coke_ctx = document.getElementById("coke_chart");

const coke_labels = coke_sold_data.time;
const coke_sold_num = coke_sold_data.sold;

const coke_data = {
  labels: coke_labels,
  datasets: [
    {
      data: coke_sold_num,
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

const coke_chart = new Chart(coke_ctx, {
  type: "bar",
  data: coke_data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },
  },
});

// update coke_chart
function get_coke() {
  coke_chart.update();
}

setInterval(get_coke, 5000);
