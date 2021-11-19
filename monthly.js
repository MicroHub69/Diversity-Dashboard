var ctx = document.getElementById('monthly').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
datasets: [{
    label: 'My DASHBOARD',
    data: [60, 70],
    backgroundColor: [
        '#AC557D',
        '#00838F'
    ],
    hoverOffset: 4,
    cutout: '85%'
    }]
    },
});