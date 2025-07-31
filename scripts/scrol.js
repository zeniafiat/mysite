window.addEventListener('scroll', function() {
    const element = document.querySelector('.navigation');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 200) {
        element.classList.add('scrolled');
        const elementWidth = element.offsetWidth;
        element.style.left = `calc(50vw - ${elementWidth / 2}px)`;
    } else {
        element.classList.remove('scrolled');
        const elementWidth = element.offsetWidth;
        element.style.left = `calc(50vw - ${elementWidth / 2}px)`;
    }
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.querySelector('.from-left').classList.add('slide-from-left');
        entry.target.querySelector('.from-right').classList.add('slide-from-right');
        }
    });
}, {threshold: 0.1});

observer.observe(document.querySelector('.container'));