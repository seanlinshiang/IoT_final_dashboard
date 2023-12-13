const purchase_ctx = document.getElementById("purchase_chart");

const purchase_labels = [];
const purchase_data = [];
products_data.forEach((e) => {
  purchase_labels.push(e.name);
  purchase_data.push(e.average_purchase_time);
});

const backgroundColors = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(255, 159, 64, 0.5)",
  "rgba(255, 205, 86, 0.5)",
  "rgba(75, 192, 192, 0.5)",
  "rgba(54, 162, 235, 0.5)",
];
const borderColors = [
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
];

// 建立包含標籤、資料、背景顏色和邊框顏色的物件陣列
const purchaseDataObjects = purchase_labels.map((label, index) => ({
  label,
  data: purchase_data[index],
  backgroundColor: backgroundColors[index],
  borderColor: borderColors[index],
}));

// 依照資料大小對物件陣列進行排序
purchaseDataObjects.sort((a, b) => a.data - b.data);

// 從排序後的物件陣列中分離資料、標籤、背景顏色和邊框顏色
const sortedPurchaseData = purchaseDataObjects.map((item) => item.data);
const sortedPurchaseLabels = purchaseDataObjects.map((item) => item.label);
const sortedPurchaseBackgroundColors = purchaseDataObjects.map(
  (item) => item.backgroundColor
);
const sortedPurchaseBorderColors = purchaseDataObjects.map(
  (item) => item.borderColor
);

const purchase_chart_data = {
  labels: sortedPurchaseLabels,
  datasets: [
    {
      data: sortedPurchaseData,
      backgroundColor: sortedPurchaseBackgroundColors,
      borderColor: sortedPurchaseBorderColors,
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
