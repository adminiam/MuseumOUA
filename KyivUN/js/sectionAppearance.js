document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const config = {
        rootMargin: '0px',
        threshold: 0.5
    };

    let observer = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, config);

    sections.forEach(section => {
        observer.observe(section);
    });
});