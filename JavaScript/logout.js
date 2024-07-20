// Function to show the logout modal
function showLogoutModal() {
    document.getElementById('logoutModal').style.display = 'flex';
}

// Function to hide the logout modal
function hideLogoutModal() {
    document.getElementById('logoutModal').style.display = 'none';
}

// Function to logout the user
function logout() {
    // Implement actual logout logic here, e.g., redirect to a logout endpoint
    window.location.href = 'logout.html';
}
