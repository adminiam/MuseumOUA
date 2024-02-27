var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) {
        var allElements = document.querySelectorAll('*');
        allElements.forEach(function(element) {
            element.style.boxSizing = 'border-box';
        });

        var sectionsContainer = document.querySelector('.sections-container');
        sectionsContainer.style.height = '100vh';
        sectionsContainer.style.overflowY = 'hidden';

        var sections = document.querySelectorAll('section');
        var sectionHeight = sections[0].offsetHeight;
        sections.forEach(function(section) {
            section.style.height = '100vh';
            section.style.scrollSnapAlign = 'start';
            section.style.position = 'relative';
        });

        var currentSection = 0;
        var isScrolling = false;
        var lastScrollTime = 0;
        var sensitivity = 700; // Чувствительность скролла для больших экранов
        if (isMac) {
            sensitivity = 1350; // Значение для Mac
        }

        function scrollToSection(sectionIndex) {
            isScrolling = true;
            sectionsContainer.scrollTo({
                top: sectionIndex * sectionHeight,
                behavior: 'smooth'
            });

            setTimeout(function() {
                isScrolling = false;
            }, 700);
        }

        var scrollingTimeout;
        sectionsContainer.addEventListener('wheel', function(event) {
            var isOverPlayer = isCursorOverPlayer(event);
            if (isOverPlayer) {
                return;
            }

            event.preventDefault(); // Предотвращаем прокрутку по умолчанию

            var now = new Date().getTime();
            if (now - lastScrollTime < sensitivity) {
                return;
            }
            lastScrollTime = now;

            var deltaY = event.deltaY || event.wheelDelta;
            if (!isScrolling) {
                if (deltaY > 0 && currentSection < sections.length - 1) {
                    currentSection++;
                    scrollToSection(currentSection);
                } else if (deltaY < 0 && currentSection > 0) {
                    currentSection--;
                    scrollToSection(currentSection);
                }
            } else {
                clearTimeout(scrollingTimeout);
                scrollingTimeout = setTimeout(function() {
                    isScrolling = false;
                }, 700);
            }
        });

        function isCursorOverPlayer(event) {
            var playerElement = document.getElementById('your-player-id'); // Замените 'your-player-id' на ID вашего плеера YouTube
            if (playerElement) {
                var cursorX = event.clientX;
                var cursorY = event.clientY;
                var playerRect = playerElement.getBoundingClientRect();
                var playerLeft = playerRect.left;
                var playerRight = playerRect.right;
                var playerTop = playerRect.top;
                var playerBottom = playerRect.bottom;

                if (cursorX > playerLeft && cursorX < playerRight && cursorY > playerTop && cursorY < playerBottom) {
                    return true; // Курсор находится над плеером
                }
            }
            return false; // Курсор не находится над плеером
        }
    } else {

    }
});
