let startCount = function() {
    
    let cookies = document.getElementById('cookie');
    let counter = Number(document.getElementById('clicker__counter').textContent);
    let speed = document.getElementById('clicker__speed');
    let lastClick = Date.now();
    let speedClick = 0;
    

    cookies.onclick = function() {
        let now = Date.now();
        
        speedClick = 1 / ((now - lastClick) / 1000);
        speed.textContent = speedClick.toFixed(2);
        lastClick = now;

        counter += 1;

        if (counter % 2 === 0) {
            cookies.width = 200;

        } else {
            cookies.width = 180;
        }

        document.getElementById('clicker__counter').textContent = counter;
    }
}


startCount();