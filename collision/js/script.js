let cnv = document.querySelector("canvas");
let ctx = cnv.getContext("2d");

let left = 37, up = 38, rigth = 39, down = 40; 
let size = 50; 
let posX = 50; 
let posY = 50; 
let objColor = "#00f";

let blockX = cnv.width / 2 - 25;
let blockY = cnv.height / 2 - 25;

let mvLeft = mvUp = mvRigth = mvDown = false;

function updateBlock(){
    if(mvLeft){
        posX--;
    }
    if(mvRigth){
        posX++;
    }
    if(mvUp){
        posY--;
    }
    if(mvDown){
        posY++;
    }
}

function colide(){
    if(posX + size > blockX && posX < blockX + size && posY + size > blockY && posY < blockY + size ){
        objColor = "#f00";
    }else {
        objColor = "#00f";
    }
}

window.addEventListener("keydown", keydownHandler, false); 

function keydownHandler(e){ 
    let key = e.keyCode;
    switch(key){
        case up:
            mvUp = true;
            break;
        case down:
            mvDown = true;
            break;
        case left:
            mvLeft = true;
            break;
        case rigth:
            mvRigth = true;
            break;
    }
}

window.addEventListener("keyup", keyupHandler, false); 

function keyupHandler(e){ 
    let key = e.keyCode;
    switch(key){
        case up:
            mvUp = false;
            break;
        case down:
            mvDown = false;
            break;
        case left:
            mvLeft = false;
            break;
        case rigth:
            mvRigth = false;
            break;
    } 
}

function update(){ 
    updateBlock(); 
    colide();
}

function draw(){ 
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "#000";
    ctx.fillRect(blockX, blockY, size, size);
    ctx.fillStyle = objColor;
    ctx.fillRect(posX, posY, size, size);
}

function loop(){
    window.requestAnimationFrame(loop, cnv);
    update();
    draw();
}

loop();