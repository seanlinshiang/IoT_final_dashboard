const selling_ctx = document.getElementById("selling_chart");

let selling_datasets = []

products_data.forEach(e => {
    if (e.sold_num > 0) {
        selling_datasets.push({
            label: e.name,
            data: [{
                x: e.average_purchase_time,
                y: e.average_stop_time,
                r: e.sold_num
            }],
        })
    } else {
        selling_datasets.push({
            label: e.name,
            data: [{
                x: e.average_purchase_time,
                y: e.average_stop_time,
                r: 12
            }],
        })
    }  
});

const selling_chart_data = {
  datasets: selling_datasets,
};

const selling_chart = new Chart(selling_ctx, {
  type: "bubble",
  data: selling_chart_data,
  options: {},
});
