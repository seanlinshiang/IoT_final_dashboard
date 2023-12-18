const stop_ctx = document.getElementById("stop_chart");

const stop_labels = [];
const stop_data = [];
products_data.forEach((e) => {
  stop_labels.push(e.name);
  stop_data.push(e.accum_stop_time);
});

// // 建立包含標籤、資料、背景顏色和邊框顏色的物件陣列
// const stopDataObjects = stop_labels.map((label, index) => ({
//   label,
//   data: stop_data[index],
//   backgroundColor: backgroundColors[index],
//   borderColor: borderColors[index],
// }));

// // 依照資料大小對物件陣列進行排序
// stopDataObjects.sort((a, b) => a.data - b.data);

// // 從排序後的物件陣列中分離資料、標籤、背景顏色和邊框顏色
// const sortedStopData = stopDataObjects.map((item) => item.data);
// const sortedStopLabels = stopDataObjects.map((item) => item.label);
// const sortedStopBackgroundColors = stopDataObjects.map(
//   (item) => item.backgroundColor
// );
// const sortedStopBorderColors = stopDataObjects.map((item) => item.borderColor);

const stop_chart_data = {
  labels: stop_labels,
  datasets: [
    {
      data: stop_data,
      backgroundColor: backgroundColors,
      borderColor: borderColors,
      borderWidth: 1,
    },
  ],
};

const stop_config = {
  type: "bar",
  data: stop_chart_data,
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
const stop_chart = new Chart(stop_ctx, stop_config);

// update stop_chart
function get_stop() {
  stop_data[0] = products_data[0].accum_stop_time;
  stop_chart.update();
}

setInterval(get_stop, 1000);
