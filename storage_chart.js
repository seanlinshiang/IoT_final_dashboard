const storage_ctx = document.getElementById("storage_chart");

const storage_labels = [];

products_data.forEach((e) => {
  storage_labels.push(e.name);
});

const storage_data = {
  labels: storage_labels,
  datasets: [
    {
      data: [],
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

for (let i = 0; i <= 4; i++) {
  storage_data.datasets[0].data.push(products_data[i].storage);
}

const storage_chart = new Chart(storage_ctx, {
  type: "bar",
  data: storage_data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  },
});

// update storage_chart
function get_storage() {
  storage_data.datasets[0].data[0] = products_data[0].storage;
  storage_chart.update();
}

setInterval(get_storage, 1000);
