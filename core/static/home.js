
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        // Удаляем активный класс у всех кнопок
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

        // Скрываем все блоки
        document.querySelectorAll('.content-block').forEach(block => block.style.display = 'none');

        // Добавляем активный класс на нажатую кнопку
        this.classList.add('active');

        // Показываем соответствующий блок
        const targetClass = this.getAttribute('data-target');
        document.querySelector(`.${targetClass}`).style.display = 'block';
    });
});

