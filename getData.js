var requestOptions = {
  method: "GET",
  mode: "cors",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET",
  //   },
};

fetch("http://192.168.50.197:5000/storage/", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result.message);
    products_data[1].storage = int(result.message);
  })
  .catch((error) => console.log("error", error));
