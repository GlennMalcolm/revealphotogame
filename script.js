// Remove one box at a time on button click
document.getElementById('removeOneBox').addEventListener('click', () => {
    const remainingBoxes = document.querySelectorAll('.box:not(.removed)');
    if (remainingBoxes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * remainingBoxes.length);
    const box = remainingBoxes[randomIndex];

    box.classList.add('removed');
});

// Remove all boxes instantly
document.getElementById('removeAllBoxes').addEventListener('click', () => {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => box.classList.add('removed'));
});

// Refresh the page
document.getElementById('refreshPage').addEventListener('click', () => {
    location.reload();
});
