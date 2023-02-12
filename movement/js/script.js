let cnv = document.querySelector("canvas");
let ctx = cnv.getContext("2d");

let p1 = {
    x: 10,
    y: 10
}

function render() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillRect(p1.x, p1.y, 50, 50);
}

window.addEventListener("keydown", keydownHandler); 
window.addEventListener("keyup", keyupHandler); 

let up = 38, down = 40, left = 37, right = 39;

function keydownHandler(e) {
    let key = e.keyCode;
    if(key === left && key !== right) {
        mvLeft = true; 
    }
    if(key === right && key !== left) {
        mvRight = true;
    }
    if(key === up && key !== down) {
        mvUp = true; 
    }
    if(key === down && key !== up) {
        mvDown = true;  
    }
}

function keyupHandler(e) {
    let key = e.keyCode;
    if(key === left && key !== right) {
        mvLeft = false; 
    }
    if(key === right && key !== left) {
        mvRight = false; 
    }
    if(key === up && key !== down) {
        mvUp = false; 
    }
    if(key === down && key !== up) {
        mvDown = false;  
    }
}


let mvLeft = mvRight = mvUp = mvDown = false;

function move() {
    if(mvLeft){
        p1.x--;
    }
    if(mvRight){
        p1.x++;
    }
    if(mvUp){
        p1.y--;
    }
    if(mvDown){
        p1.y++;
    }
}

function update() {
    requestAnimationFrame(update, cnv);
    move();
    render();
}

update();
