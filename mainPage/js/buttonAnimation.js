function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.custom-button, .go-top-button');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // предотвращает стандартное действие ссылки
            const targetSectionId = this.getAttribute('href').substring(1);
            scrollToSection(targetSectionId);
        });
    });
});