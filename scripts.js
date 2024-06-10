document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato, ' + document.getElementById('name').value + '!');
});

function checkScreenSize() {
    const width = window.innerWidth;

    if (width <= 360) {
        document.body.style.backgroundColor = '#ffe6e6';
    } else if (width > 360 && width <= 480) {
        document.body.style.backgroundColor = '#ffcccc';
    } else if (width > 480 && width <= 768) {
        document.body.style.backgroundColor = '#ffb3b3';
    } else if (width > 768 && width <= 1024) {
        document.body.style.backgroundColor = '#ff9999';
    } else if (width > 1024 && width <= 1280) {
        document.body.style.backgroundColor = '#ff8080';
    } else if (width > 1280 && width <= 1440) {
        document.body.style.backgroundColor = '#ff6666';
    } else if (width > 1440) {
        document.body.style.backgroundColor = '#ff4d4d';
    }
}

// Check screen size on load and on resize
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

