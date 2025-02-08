const images = document.querySelectorAll('.galeria img');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');

let currentScale = 1;

zoomInButton.addEventListener('click', () => {
    if (currentScale < 1.4) {
        currentScale += 0.2;
        images.forEach(img => img.style.transform = `scale(${currentScale})`);
    }
});

zoomOutButton.addEventListener('click', () => {
    if (currentScale > 0.6) {
        console.log(currentScale)
        currentScale -= 0.2;
        images.forEach(img => img.style.transform = `scale(${currentScale})`);
    }
});
