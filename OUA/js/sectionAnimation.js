document.addEventListener('DOMContentLoaded', function () {
    // Получаем все секции на странице
    const sections = document.querySelectorAll('section');
    // Индекс текущей активной секции
    let currentSectionIndex = 0;
    // Флаг для ограничения частоты срабатывания события прокрутки
    let isThrottled = false;

    // Добавляем обработчик события прокрутки колесика мыши с функцией ограничения
    window.addEventListener('wheel', throttle(scrollChange, 1500));

    // Функция для изменения текущей активной секции при событии прокрутки
    function scrollChange(e) {
        // Если событие прокрутки ограничено, прекращаем выполнение функции
        if (isThrottled) return;
        // Устанавливаем флаг ограничения
        isThrottled = true;

        // Сбрасываем флаг ограничения через определенное время
        setTimeout(function () {
            isThrottled = false;
        }, 500);

        // Увеличиваем индекс текущей секции, если прокрутка вниз и секция не последняя
        if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        }
        // Уменьшаем индекс текущей секции, если прокрутка вверх и секция не первая
        else if (e.deltaY < 0 && currentSectionIndex > 0) {
            currentSectionIndex--;
        }

        // Прокручиваем страницу к верхней границе текущей секции с плавностью
        sections[currentSectionIndex].scrollIntoView({block: 'start', behavior: 'smooth'});
    }

    // Функция ограничения частоты выполнения функции scrollChange
    function throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            // Если не в ограничении, вызываем функцию scrollChange
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                // Устанавливаем таймер для сброса ограничения через определенный период
                setTimeout(function () {
                    inThrottle = false;
                }, limit);
            }
        };
    }

});

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.custom-button, .go-top-button');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // предотвращает стандартное действие ссылки
            const targetSectionId = this.getAttribute('href').substring(1);
            scrollToSection(targetSectionId);
        });
    });
});