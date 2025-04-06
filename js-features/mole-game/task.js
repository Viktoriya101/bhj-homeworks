function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function startGame() {
    let dead = 0;
    let lost = 0;

    for (let i = 1; i < 10; i++) {
        let hole = getHole(i);
    
        hole.addEventListener('click', function(event) {            
            if (hole.classList.contains('hole_has-mole')) {
                dead++;
                document.getElementById('dead').textContent = dead;
            } else {
                lost++;
                document.getElementById('lost').textContent = lost;
            }

            if (lost === 5) {
                alert('Вы проиграли(((');
                location.reload();
            }
            
            if (dead === 10) {
                alert('Победа!!!!!!');
                location.reload();
            }
        })   
    }
}

startGame();