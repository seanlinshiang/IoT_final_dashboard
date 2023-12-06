const ctx = document.getElementById('myChart');

const data = {
datasets: [{
    label: 'First Dataset',
    data: [{
    x: 10,
    y: 20,
    r: 100
    }, {
    x: 40,
    y: 10,
    r: 50
    }],
    backgroundColor: 'rgb(255, 99, 132)'
}]
};  
chart = new Chart(ctx, {
type: 'bubble',
data: data,
options: {}
});

count = 0
function update() {
count++;
chart.data.datasets[0].data[0].r = count;
chart.data.datasets[0].data[0].y = count * 3;
chart.data.datasets[0].data[0].x = count * 2;
chart.update()
}

setInterval(update, 1000)