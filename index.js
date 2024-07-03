document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const step = 20; // Size of the step in pixels

    document.getElementById('up').addEventListener('click', () => {
        let top = parseInt(window.getComputedStyle(box).getPropertyValue('top'));
        if (top > 0) {
            box.style.top = top - step + 'px';
        }
    });

    document.getElementById('down').addEventListener('click', () => {
        let top = parseInt(window.getComputedStyle(box).getPropertyValue('top'));
        if (top < 360) { // 400 (game-area height) - 40 (box height)
            box.style.top = top + step + 'px';
        }
    });

    document.getElementById('left').addEventListener('click', () => {
        let left = parseInt(window.getComputedStyle(box).getPropertyValue('left'));
        if (left > 0) {
            box.style.left = left - step + 'px';
        }
    });

    document.getElementById('right').addEventListener('click', () => {
        let left = parseInt(window.getComputedStyle(box).getPropertyValue('left'));
        if (left < 360) { // 400 (game-area width) - 40 (box width)
            box.style.left = left + step + 'px';
        }
    });
});
