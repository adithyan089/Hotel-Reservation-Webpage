// Pie Chart Code
const pieCtx = document.getElementById('roomChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',  // Pie chart
  data: {
    labels: ['Single', 'Double', 'Suite'],
    datasets: [{
      label: 'Booked Rooms',
      data: [10, 20, 5],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  },
  options: {
    responsive: true
  }
});

// Bar Chart Code (assuming data is available)
const barCtx = document.getElementById('chart-booked-rooms').getContext('2d');
new Chart(barCtx, {
  type: 'bar',  // Bar chart
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Booked Rooms',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Available Rooms',
        data: [20, 15, 10, 8, 12, 18],
        backgroundColor: 'rgba(192, 75, 192, 0.2)',
        borderColor: 'rgba(192, 75, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Reserved Rooms',
        data: [5, 8, 10, 12, 6, 3],
        backgroundColor: 'rgba(192, 192, 75, 0.2)',
        borderColor: 'rgba(192, 192, 75, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
