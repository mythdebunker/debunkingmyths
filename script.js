document.addEventListener("DOMContentLoaded", () => {
    const misinfoList = document.getElementById('misinfo-list');
    const toggleButton = document.getElementById('toggle-button');
    const randomFactButton = document.getElementById('random-fact-button');
    const facts = Array.from(misinfoList.children);

    const colors = ['#ffe4e1', '#f0e68c', '#add8e6', '#90ee90', '#ffb6c1'];
    let currentColorIndex = 0;

    setInterval(() => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[currentColorIndex];
    }, 500);
});