const form = document.querySelector('form');
const input = document.querySelector('input');

const list = document.querySelector('.tasks__list');

form.addEventListener('submit', event => {
    event.preventDefault();
    if (input.value.trim() === '') {
        input.value = '';
        return; // Не добавляем задачу, если значение пустое
    }
    // новая задача
    let newList = `
    <div class="task">
        <div class="task__title">
            ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;
    // добавляем задачи
    list.insertAdjacentHTML('afterbegin', newList);
    input.value = '';

    // крестик
    const cross = document.querySelector('.task__remove');
    
    // удаляем родительский элемент при нажатии
    cross.addEventListener('click', function() { 
        this.parentElement.remove();
    });
});