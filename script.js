document.addEventListener("DOMContentLoaded", () => {
    const colors = ['#ffe4e1', '#f0e68c', '#add8e6', '#90ee90', '#ffb6c1'];
    let currentColorIndex = 0;

    setInterval(() => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[currentColorIndex];
    }, 500);
});

function generateLink() {
    const userInput = document.getElementById('userInput').value;
    const formattedInput = encodeURIComponent(userInput.trim());
    const link = `https://mythdebunking.com/debunk/${formattedInput}`;
    document.getElementById('generatedLink').innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
    document.getElementById('copyButton').style.display = 'inline';
}

function copyToClipboard() {
    const linkText = document.getElementById('generatedLink').textContent;
    navigator.clipboard.writeText(linkText).then(() => {
        
    }).catch(err => {
        
    });
}