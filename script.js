document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const description = document.getElementById('description');
        description.textContent = this.getAttribute('data-desc');
        description.style.display = 'block';
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-item')) {
        const description = document.getElementById('description');
        description.style.display = 'none';
    }
});