function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.custom-button, .go-top-button');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('data-target-section');
            scrollToSection(targetSectionId);
        });
    });
});


