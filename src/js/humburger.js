document.addEventListener('DOMContentLoaded', (event) => {
    const humburgerIcon = document.getElementById('humburger-icon');
    const humburger = document.getElementById('humburger');
    const backDrop = document.getElementById('backDrop');
    const exitHumburger = document.getElementById('exitHumburger');
    
    const exitHumburgerToggle = () => {
        exitHumburger.classList.toggle('hidden')
    }

    const backDropToggle = () => {
        backDrop.classList.toggle('hidden');
        setTimeout(() => {
            backDrop.classList.toggle('opacity-0');
        }, 10);
    };

    const humburgerToggle = () => {
        humburger.classList.toggle('hidden');
        setTimeout(() => {
            humburger.classList.toggle('translate-x-full');
        }, 10);
        backDropToggle();
        exitHumburgerToggle();
    };

    humburgerIcon.addEventListener('click', humburgerToggle);
    backDrop.addEventListener('click', humburgerToggle);
    exitHumburger.addEventListener('click', humburgerToggle)
});
