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
