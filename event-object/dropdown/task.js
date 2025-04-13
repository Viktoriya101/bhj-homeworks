const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');

    dropdownValue.addEventListener('click', () => {
        dropdownList.classList.toggle('dropdown__list_active');
    });

    dropdownList.addEventListener('click', (e) => {
        if (e.target.closest('.dropdown__item')) {
            e.preventDefault();
            dropdownValue.textContent = e.target.textContent;
            dropdownList.classList.remove('dropdown__list_active');
        }
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdownList.classList.remove('dropdown__list_active');
        }
    });
});