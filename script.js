document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.circle-btn');
    const displayName = document.getElementById('displayName');
    const containerSize = 200;
    const numButtons = buttons.length;
    const centerX = containerSize / 2;
    const centerY = containerSize / 2;
    const radius = 160;
    let angle = 0;
    const angleStep = (2 * Math.PI) / numButtons;

    buttons.forEach((button, i) => {
        // Position buttons in a circle
        const x = centerX + radius * Math.cos(angle) - button.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - button.offsetHeight / 2;
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
        angle += angleStep;

        // Add initial animation
        setTimeout(() => {
            button.classList.add('visible');
        }, i * 200);

        // Display button name on hover
        button.addEventListener('mouseover', () => {
            buttons.forEach(btn => btn.classList.add('not-hovered'));
            button.classList.remove('not-hovered');
            button.classList.add('hovered');
            displayName.innerText = button.getAttribute('data-name');
        });

        // Reset when mouseout
        button.addEventListener('mouseout', () => {
            buttons.forEach(btn => btn.classList.remove('not-hovered', 'hovered'));
            displayName.innerText = '';
        });
    });
});
