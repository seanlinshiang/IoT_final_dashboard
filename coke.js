const coke_ctx = document.getElementById("coke_chart");

let coke_labels = coke_sold_data.time;
let coke_sold_num = coke_sold_data.sold_num;

const coke_data = {
  labels: coke_labels,
  datasets: [
    {
      data: coke_sold_num,
    },
  ],
};

const coke_chart = new Chart(coke_ctx, {
  type: "line",
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
        max: 50,
      },
    },
  },
});

// update coke_chart
function get_coke() {
  let accum_sold = 0;
  let interval = 10;
  coke_labels = [];
  coke_sold_num = [];
  for (let i = 0; i < coke_sold_data.time.length; i++) {
    accum_sold += coke_sold_data.sold_num[i];
    if (i % interval == interval - 1) {
      coke_labels.push(coke_sold_data.time[i + 1]);
      coke_sold_num.push(accum_sold);
      accum_sold = 0;
    }
  }
  coke_data.labels = coke_labels;
  coke_data.datasets[0].data = coke_sold_num;
  console.log(coke_data);
  console.log("labels", coke_labels);
  console.log("sold", coke_sold_num);
  coke_chart.update();
}

// setInterval(get_coke, 5000);
