document.addEventListener('DOMContentLoaded', function() {
    // Function to handle tab click events
    function handleTabClick(event) {
        const clickedButton = event.currentTarget;
        const targetFrameClass = clickedButton.getAttribute('data-target');
        
        // Remove active class from all sidebar links
        const buttons = document.querySelectorAll('.sidenav ul li');
        buttons.forEach(button => button.classList.remove('active'));
        
        // Add active class to the clicked button
        clickedButton.classList.add('active');
        // Hide all frames
        const frames = document.querySelectorAll('.frames');
        frames.forEach(frame => {
            frame.classList.remove('active');
            frame.style.display = 'none';
        });
        
        // Show the corresponding frame
        const targetFrame = document.querySelector(`.frames.${targetFrameClass}`);
        targetFrame.classList.add('active');
        targetFrame.style.display = 'block';
    }

    // Attach click event listeners to all sidebar links
    const buttons = document.querySelectorAll('.pagebtn');
    buttons.forEach(button => {
        button.addEventListener('click', handleTabClick);
    });
});

function showLogoutConfirmation() {
    const iframeContainer = document.getElementById('iframeContainer');
    const iframe = document.getElementById('iframe');

    // Set the src of the iframe to load the logout confirmation page
    iframe.src = 'logout.html';

    // Display the iframe container
    iframeContainer.style.display = 'flex';
}

function closeIframe() {
    const iframeContainer = document.getElementById('iframeContainer');
    const iframe = document.getElementById('iframe');

    // Hide the iframe container
    iframeContainer.style.display = 'none';

    // Clear the src of the iframe
    iframe.src = '';
}

// Attach the event listener to the logout button
const logoutButton = document.querySelector('.logout button');
logoutButton.addEventListener('click', showLogoutConfirmation);
