var requestOptions = {
  method: "GET",
  mode: "cors",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET",
  //   },
};
// http://192.168.50.197:5000/storage/

// fetch storage
fetch("https://reqres.in/api/users/2", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result.data);
    console.log(result.data.id);
    products_data[0].storage = result.data.id;
    // console.log(result.message);
  })
  .catch((error) => console.log("error", error));

// fetch average_stop_time
fetch("https://reqres.in/api/users/2", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    products_data[0].average_stop_time = result.data.id;
  })
  .catch((error) => console.log("error", error));

// fetch average_purchase_time
fetch("https://reqres.in/api/users/2", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    products_data[0].average_purchase_time = result.data.id;
  })
  .catch((error) => console.log("error", error));

// fetch accum_stop_time
fetch("https://reqres.in/api/users/2", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    products_data[0].accum_stop_time = result.data.id;
  })
  .catch((error) => console.log("error", error));

// fetch sold_num
fetch("https://reqres.in/api/users/2", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    products_data[0].sold_num = result.data.id;
  })
  .catch((error) => console.log("error", error));
