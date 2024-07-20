// Assuming you have an array of room types and their corresponding booking counts
const roomTypes = ['Single', 'Double', 'Suite'];
const bookingCounts = [10, 20, 5];

// Create a canvas element to render the pie chart
const canvas = document.createElement('canvas');
canvas.id = 'roomChart';
document.body.appendChild(canvas);

// Get the canvas context (fixed line)
const ctx = canvas.getContext('2d');    
ctx.canvas.style.float = 'right';

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: roomTypes,
    datasets: [{
      data: bookingCounts,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  },
  options: {
    responsive: true
  }
});
