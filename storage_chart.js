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
      backgroundColor: backgroundColors,
      borderColor: borderColors,
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
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.2)",
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "rgba(0, 0, 0, 0.2)",
        },
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
