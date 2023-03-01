// bird image
var birdImg;
// canvas size
var canvasX = 800;
var canvasY = 500;
// bird position
var x = 50;
var y = 50;
var yV = 1;
var accel = 0.05;

// drawing
function setup() {

    createCanvas(canvasX, canvasY);
    background(230, 230, 200);
    birdImg = loadImage("img/birds-9515.png");

}



function draw() {
    background(230, 230, 200);
    image(birdImg, this.x, this.y, 50, 50);
    fill(120,120,120);
    this.changingPosition();

    rectMode(CORNERS);
    stroke(100, 250, 0);
    strokeWeight(2);
    fill(100, 250, 0);
    rect(1, 1, 50, 50);
}

function keyPressed() {
    console.log(this.x, this.y)
    if (keyCode === LEFT_ARROW) {
        this.x -= 10;
    } else if (keyCode === RIGHT_ARROW) {
        this.x += 10;
    } else if (keyCode === UP_ARROW) {
        this.y -= 90;
    } else if (keyCode === 32) {
        console.log('her')
        changingAcceleration(false);
    }
}

// custom functions to change position

function changingAcceleration(down=true) {
    if (down) {
        console.log(this.y);
        this.yV += this.accel;
        if (canvasY - this.y < 50) this.yV = 0;
    } else {
        this.yV = 1;
        this.yV -= 90 * this.accel;
    }
}
function changingPosition() {
    this.x = (this.x + 0.5) % canvasX;
    this.y = (this.y + yV) % canvasY;

    changingAcceleration()
}