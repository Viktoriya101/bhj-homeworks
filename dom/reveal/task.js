let reveal = document.querySelectorAll('.reveal');

for(let rect of reveal) {
  document.addEventListener('scroll', () => {
    let {bottom, top} = rect.getBoundingClientRect();

    if(top <= window.innerHeight) {
      rect.classList.add('reveal_active');
    }
    if(bottom <= 0) {
      rect.classList.remove('reveal_active');
    }
  })
}