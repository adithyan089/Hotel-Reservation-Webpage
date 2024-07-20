// Function to create and append a new staff item
function createAndAppendStaffItem(staffName, staffRole) {
    // Validate inputs
    if (!staffName || !staffRole) {
        alert('Please provide both staff name and role.');
        return;
    }

    // Create a new div element for the staff item
    const staffItem = document.createElement('div');
    staffItem.classList.add('staff-item', staffName.toLowerCase().replace(/\s/g, '-'), staffRole.toLowerCase().replace(/\s/g, '-'));
    
    // Set the inner HTML of the staff item
    staffItem.innerHTML = `
        <i class="fas fa-user"></i>
        <h3>${staffName}</h3>
        <p>Role: ${staffRole}</p>
        <button class="btn btn-danger">Delete</button>
    `;
    
    // Find the last row in the staff container
    const staffContainer = document.querySelector('.staff');
    let lastRow = staffContainer.querySelector('.row:last-child');
    
    // Check if the last row can accommodate a new staff item
    if (lastRow && lastRow.childElementCount < 4) {
        lastRow.appendChild(staffItem);
    } else {
        // Create a new row and append the staff item
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.appendChild(staffItem);
        staffContainer.appendChild(newRow);
    }
    
    // Add event listener to the delete button
    staffItem.querySelector('.btn-danger').addEventListener('click', () => deleteStaffItem(staffItem));
}

// Function to delete a staff item
function deleteStaffItem(staffItem) {
    // Remove the staff item from the DOM
    staffItem.remove();
}

// Event listener for the "Add Staff" button
document.querySelector('button[name="addstaff"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    const staffName = document.querySelector('input[name="staffname"]').value;
    const staffRole = document.querySelector('input[name="staffrole"]').value;
    createAndAppendStaffItem(staffName, staffRole);
});

// Add event listeners to existing delete buttons
document.querySelectorAll('.staff-item .btn-danger').forEach(button => {
    button.addEventListener('click', function() {
        deleteStaffItem(this.parentElement);
    });
});
