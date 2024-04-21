import Chart from 'chart.js/auto';

const barChart = (async function () {
  const data = [
    { Day: 1, Hour: 1 },
    { Day: 2, Hour: 2 },
    { Day: 3, Hour: 3 },
    { Day: 4, Hour: 4 },
    { Day: 5, Hour: 5 },
    { Day: 6, Hour: 6 },
    { Day: 7, Hour: 7 },
    { Hour: 8 },
    { Hour: 9 },
  ];

  new Chart(document.getElementById('acquisitions'), {
    type: 'bar',
    data: {
      labels: data.map((row) => row.Day),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: data.map((row) => row.Hour),
        },
      ],
    },
  });
})();

export { barChart };
