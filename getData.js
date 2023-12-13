// 創建一個新的 Date 物件
var now = new Date();

// 取得當下的年、月、日、時、分、秒
var year = now.getFullYear(); // 年份
var month = now.getMonth() + 1; // 月份 (從 0 開始，所以要加 1)
var day = now.getDate(); // 日
var hours = now.getHours(); // 小時
var minutes = now.getMinutes(); // 分鐘
var seconds = now.getSeconds(); // 秒

var requestOptions = {
  method: "GET",
  mode: "cors",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET",
  //   },
};
function get_data() {
  fetch("http://172.20.10.7:5000/get_data", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      products_data[0].storage = result.storage;
      products_data[0].average_stop_time = result.average_stop_time;
      products_data[0].average_purchase_time = result.average_purchase_time;
      products_data[0].accum_stop_time = result.accum_stop_time;
      products_data[0].sold_num = result.sold_num;
      // console.log(result.message);
    })
    .catch((error) => console.log("error", error));
}

setInterval(get_data, 1000);

function get_coke_data() {
  clock = `~${hours}點${minutes}分`;
  coke_sold_data.time.push(clock);
  if (coke_sold_data.sold == []) {
    coke_sold_data.sold.push(products_data[0].sold_num);
  } else {
    let tmp = 0;
    for (let i = 0; i < coke_sold_data.sold.length; i++) {
      tmp = tmp + coke_sold_data.sold[i];
    }
    coke_sold_data.sold.push(products_data[0].sold_num - tmp);
  }
  console.log(coke_sold_data.time);
  console.log(coke_sold_data.sold);
}

setInterval(get_coke_data, 10000);
