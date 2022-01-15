
var ctx = document.getElementById('daily').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'MY DASHBOARD',
            data: [30, 19],
            backgroundColor: [
              '#AC557D',
              '#00838F'
            ],
            borderWidth: 0,
            borderRadius: "3",
            cutout: "85%"
        }]
    },

});
