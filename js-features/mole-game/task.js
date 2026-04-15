let lost = 0;
let dead = 0;
let holes = [];
for(let i = 1; i<=document.getElementsByClassName("hole").length; i++) {
    holes.push(document.getElementById(`hole${i}`));
    document.getElementById(`hole${i}`).onclick = hit;
}
console.log(holes);
function restart() {
    dead = 0;
    lost = 0;
    document.getElementById("lost").textContent = lost;
    document.getElementById("dead").textContent = dead;
}
function hit(element) {
    if(document.getElementById(`${element.target.id}`).classList.contains( 'hole_has-mole' )) {
        dead++;
        document.getElementById("dead").textContent = dead;
    }
    else{
        lost++;
        document.getElementById("lost").textContent = lost;
    }
    if(lost === 5) {
        alert("Поражение!");
        restart();
    }
    else if(dead === 10) {
        alert("Победа");
        restart();
    }
}