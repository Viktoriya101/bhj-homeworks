let clickCount = 0; 
let lastClickTime = Date.now(); 
const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

const clickSpeedIndicator = document.createElement('div');
clickSpeedIndicator.classList.add('click-speed');
const clickerStatus = document.querySelector('.clicker__status');
clickerStatus.appendChild(clickSpeedIndicator);

function updateClicker() {
    const currentTime = Date.now();
    const timeDiff = (currentTime - lastClickTime) / 1000;
    lastClickTime = currentTime;

    clickCount++;
    counter.textContent = clickCount;

    if (timeDiff > 0) {
        const clickSpeed = (1 / timeDiff).toFixed(2);
        clickSpeedIndicator.textContent = `Скорость клика: ${clickSpeed} кликов в секунду`;
    }

    const newSize = clickCount % 2 === 0 ? 180 : 220;
    cookie.style.width = `${newSize}px`;
}

cookie.onclick = updateClicker;