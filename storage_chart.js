const storage_ctx = document.getElementById("storage_chart");

const storage_labels = [];
products_data.forEach(e => {
  storage_labels.push(e.name)
});
const data = {
  labels: storage_labels,
  datasets: [
    {
      data: [],
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

for (let i = 0; i <= 4; i++) {
  data.datasets[0].data.push(products_data[i].storage);
}

const storage_chart = new Chart(storage_ctx, {
  type: "bar",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
