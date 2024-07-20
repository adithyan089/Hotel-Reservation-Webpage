document.addEventListener("DOMContentLoaded", () => {
  // Event listener for form submission
  document.getElementById("reservationForm").addEventListener("submit", submitReservationForm);
});

function submitReservationForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  const idNumber = document.getElementById("idNumberInput").value;
  const guestName = document.getElementById("guestNameInput").value;
  const email = document.getElementById("emailInput").value;
  const country = document.getElementById("countryInput").value;
  const roomType = document.getElementById("roomTypeInput").value;
  const checkInDate = document.getElementById("checkInDateInput").value;
  const checkOutDate = document.getElementById("checkOutDateInput").value;
  const status = "Pending";

  // Create a new table row
  const newRow = document.createElement("tr");

  // Create and append cells for the new row
  newRow.innerHTML = `
      <td>${idNumber}</td>
      <td>${guestName}</td>
      <td>${email}</td>
      <td>${country}</td>
      <td>${roomType}</td>
      <td>${checkInDate}</td>
      <td>${checkOutDate}</td>
      <td>${status}</td>
      <td>
          <button class="btn-confirm" onclick="confirmReservation(${idNumber})">Confirm</button>
          <button class="btn-delete" onclick="deleteReservation(${idNumber})">Delete</button>
      </td>
  `;

  // Append the new row to the table body
  const tableBody = document.querySelector(".roombooktable tbody");
  tableBody.appendChild(newRow);

  // Clear the form inputs
  document.getElementById("idNumberInput").value = "";
  document.getElementById("guestNameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("countryInput").value = "";
  document.getElementById("roomTypeInput").value = "";
  document.getElementById("checkInDateInput").value = "";
  document.getElementById("checkOutDateInput").value = "";
}

// Function to confirm a reservation
function confirmReservation(idNumber) {
  // Find the reservation row in the table
  const row = findReservationRowById(idNumber);
  if (row) {
      // Update the status cell to "Confirmed"
      row.cells[7].textContent = "Confirmed";
      alert(`Reservation ID ${idNumber} confirmed!`);
  }
}

// Function to delete a reservation
function deleteReservation(idNumber) {
  // Find the reservation row in the table
  const row = findReservationRowById(idNumber);
  if (row) {
      // Remove the row from the table
      row.remove();
      alert(`Reservation ID ${idNumber} deleted!`);
  }
}

// Helper function to find a reservation row in the table by ID number
function findReservationRowById(idNumber) {
  const rows = document.querySelectorAll(".roombooktable tbody tr");
  for (const row of rows) {
      if (row.cells[0].textContent === String(idNumber)) {
          return row;
      }
  }
  return null;
}
