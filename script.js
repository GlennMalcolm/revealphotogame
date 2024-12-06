// Load the sound file
const openBoxSound = new Audio('./sounds/open-box.mp3');

// Remove one box at a time on button click
document.getElementById('removeOneBox').addEventListener('click', () => {
    const remainingBoxes = document.querySelectorAll('.box:not(.removed)');
    if (remainingBoxes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * remainingBoxes.length);
    const box = remainingBoxes[randomIndex];

    // Add the "removed" class to the box
    box.classList.add('removed');

    // Play the sound
    openBoxSound.play();
});

// Remove all boxes instantly
document.getElementById('removeAllBoxes').addEventListener('click', () => {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => box.classList.add('removed'));

    // Optional: Play sound for each box removal (comment out if not needed)
    // openBoxSound.play();
});

// Refresh the page
document.getElementById('refreshPage').addEventListener('click', () => {
    location.reload();
});
