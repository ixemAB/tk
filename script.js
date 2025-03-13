const regions = document.querySelectorAll('.region');
const infoBox = document.getElementById('info-box');

regions.forEach(region => {
    region.addEventListener('mouseover', (event) => {
        const title = region.getAttribute('title');
        infoBox.textContent = title;
        infoBox.style.display = 'block';
        infoBox.style.left = event.pageX + 10 + 'px';
        infoBox.style.top = event.pageY + 10 + 'px';
        region.style.fill = '#51f5f2';
        region.style.cursor = 'pointer';
        region.style.transform = 'scale(1)'; // Увеличиваем масштаб
        region.style.transition = 'transform 0,9s ease'; // Добавляем анимацию
    });

    region.addEventListener('mouseout', () => {
        infoBox.style.display = 'none';
        region.style.fill = '';
        region.style.cursor = '';
        region.style.transform = 'scale(1)'; // Возвращаем исходный масштаб
        region.style.transition = 'transform 0,9s ease'; // Добавляем анимацию
    });
});
