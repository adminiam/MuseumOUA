function checkWidth() {
    const textElement = document.getElementById('animated-text');

    if (!textElement) {
        return;
    }

    const screenWidth = window.innerWidth;

    if (screenWidth < 570) {
        textElement.style.whiteSpace = 'nowrap';
    } else {
        textElement.style.whiteSpace = 'normal';
    }
}

window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);