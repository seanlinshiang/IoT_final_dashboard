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
  fetch("http://192.168.50.158:5000/get_data", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      products_data[0].storage = result.storage;
      products_data[0].average_stop_time = result.average_stop_time;
      products_data[0].average_purchase_time = result.average_purchase_time;
      products_data[0].accum_stop_time = result.accum_stop_time;
      products_data[0].sold_num = result.sold_num;
      products_data[0].consideration_num = result.consideration_num;
      products_data[0].purchase_rate = result.purchase_rate;
      // console.log(result.message);
    })
    .catch((error) => console.log("error", error));
}

setInterval(get_data, 1000);

function get_coke_data() {
  fetch("http://192.168.50.158:5000/get_history", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      coke_sold_data.time = Object.keys(result.purchase_history);
      coke_sold_data.sold_num = Object.values(result.purchase_history);
      console.log("coke_sold_data", coke_sold_data);
      get_coke();
    });
}

setInterval(get_coke_data, 5000);

get_coke_data();
get_data();
