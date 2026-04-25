let book = document.getElementById('book');
let control = document.querySelectorAll('.book__control a ');

function switchFontSize() {
  event.preventDefault();
  for(let item of control){
    item.classList.remove('font-size_active');
  }
  event.target.classList.add('font-size_active');
  
  let dataSize = event.target.dataset.size
  book.classList.remove('book_fs-big');
  book.classList.remove('book_fs-small');
  if(dataSize) {
    book.classList.add(`book_fs-${dataSize}`);
  }
}
for(let item of control) {
  item.addEventListener('click', switchFontSize);
}