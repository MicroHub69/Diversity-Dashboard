var ctx = document.getElementById('daily').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
datasets: [{
    label: 'My DASHBOARD',
    data: [300, 100],
    backgroundColor: [
    '#AC557D',
    '#00838F'
    ],
    hoverOffset: 4,
    cutout: '85%'
    }]
    },
});