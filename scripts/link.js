document.querySelector('.simple-link').addEventListener('click', function(e) {
    document.querySelector('#target').scrollIntoView({
        behavior: 'smooth'
    });
});