document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');
    const fileName = document.querySelector('.input__wrapper-desc');
  
    form.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const xhr = new XMLHttpRequest();
        const formData = new FormData(form);
  
        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total;
                progress.value = percentComplete;
            }
        };
  
        xhr.onload = () => {
            if (xhr.status === 200 || xhr.status === 201) {
                alert("Файл успешно загружен!");
                form.reset();
                progress.value = 0;
                fileName.textContent = 'Имя файла...';
            } else {
                alert("Ошибка загрузки!");
            }
        };
  
        xhr.onerror = () => {
            alert('Произошла ошибка при отправке файла.');
        };
  
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.send(formData);
    });
});
  