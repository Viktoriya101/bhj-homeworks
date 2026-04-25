document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    
    dropdownValue.addEventListener('click', () => {
        dropdownList.classList.toggle('dropdown__list_active');
    });

    dropdownList.querySelectorAll('.dropdown__item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();  // Запрет перехода по ссылке
            dropdownValue.textContent = item.innerText;  // Установка нового значения
            dropdownList.classList.remove('dropdown__list_active');  // Закрытие списка
        });
    });
});

// Закрытие списка при клике мимо него
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown__list').forEach(list => {
            list.classList.remove('dropdown__list_active');
        });
    }
});