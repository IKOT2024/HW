document.addEventListener('DOMContentLoaded', function() {
    const strip = document.querySelector('.strip');
    const content = document.querySelector('.content');
    const stripWidth = strip.offsetWidth;
    const contentWidth = content.offsetWidth;

    let position = 0;
    const duration = 40000; // Увеличиваем длительность анимации до 20 секунд
    const interval = 6; // Интервал обновления в миллисекундах
    const distance = contentWidth + stripWidth;
    const step = distance / (duration / interval); 

    function animate() {
        position -= step;
        if (position < -contentWidth) {
            position = stripWidth;
        }
        content.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});