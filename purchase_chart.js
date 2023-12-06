const purchase_ctx = document.getElementById("purchase_chart");

const purchase_labels = [];
const purchase_data = [];
products_data.forEach(e => {
    purchase_labels.push(e.name);
    purchase_data.push(e.average_purchase_time);
});

const purchase_chart_data = {
  labels: purchase_labels,
  datasets: [{
    data: purchase_data,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const purchase_config = {
    type: 'bar',
    data: purchase_chart_data,
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      indexAxis: 'y',
    }
};
const purchase_chart = new Chart(purchase_ctx, purchase_config);
