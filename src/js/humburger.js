document.addEventListener('DOMContentLoaded', (event) => {
    // Selecting elements from the DOM
    const humburgerIcon = document.getElementById('humburger-icon');
    const humburger = document.getElementById('humburger');
    const backDrop = document.getElementById('backDrop');
    const exitHumburger = document.getElementById('exitHumburger');
    
    // Function to toggle exit button visibility
    const exitHumburgerToggle = () => {
        exitHumburger.classList.toggle('hidden');
    }

    // Function to toggle backdrop visibility and opacity
    const backDropToggle = () => {
        backDrop.classList.toggle('hidden');
        setTimeout(() => {
            backDrop.classList.toggle('opacity-0');
        }, 10);
    };

    // Function to toggle hamburger menu visibility and position
    const humburgerToggle = () => {
        humburger.classList.toggle('hidden');
        setTimeout(() => {
            humburger.classList.toggle('translate-x-full');
        }, 10);
        backDropToggle(); // Toggle backdrop
        exitHumburgerToggle(); // Toggle exit button
    };

    // Event listeners for click events on hamburger icon, backdrop, and exit button
    humburgerIcon.addEventListener('click', humburgerToggle);
    backDrop.addEventListener('click', humburgerToggle);
    exitHumburger.addEventListener('click', humburgerToggle)
});
