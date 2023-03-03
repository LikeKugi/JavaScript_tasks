// ---------------------------------------------------------------------------------------
// variables and constants
// ---------------------------------------------------------------------------------------

// bird image
var birdImg;
// canvas size
var canvasX = 1024;
var canvasY = 768;

var bird = new Bird();
let barriers = [];

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// ---------------------------------------------------------------------------------------
// SETUP and DRAWING
// ---------------------------------------------------------------------------------------
function setup() {
    createCanvas(canvasX, canvasY);
    background(230, 230, 200);
    birdImg = loadImage("img/birds-9515.png");
}

function draw() {
    background(230, 230, 200);
    image(birdImg, bird.x, bird.y, 50, 50);
    bird.changingPosition();

    rectMode(CORNERS);
    obstructions();

}

// ---------------------------------------------------------------------------------------
// BIRD and its logic
// ---------------------------------------------------------------------------------------

function Bird() {
    // bird position
    this.x = 150;
    this.y = 50;
    this.yV = 1;
    this.accel = 0.05;
}
Bird.prototype.changingAcceleration = function (down = true) {
    if (down) {
        this.yV += this.accel;
        if (canvasY - this.y < 50) this.yV = 0;
    } else {
        this.yV = 1;
        this.yV -= 90 * this.accel;
    }
}
Bird.prototype.changingPosition = function () {
    // this.x = (this.x + 0.5) % canvasX;
    this.y = ((this.y + this.yV) % canvasY) > 0 ? (this.y + this.yV) % canvasY : this.yV = 0 && 0;

    this.changingAcceleration()
}

// ---------------------------------------------------------------------------------------
// Barrier and its logic
// ---------------------------------------------------------------------------------------

function Rectangles() {
    this.x = canvasX;
    this.y1 = randomInteger(canvasY / 5, canvasY / 3);
    this.color = [randomInteger(10, 250), randomInteger(10, 250), randomInteger(10, 250)]
}
Rectangles.prototype.changingPosition = function () {
    this.x -= 1;
}
Rectangles.prototype.UP = function () {
    return [this.x, 0, this.x+10, this.y1];
}
Rectangles.prototype.DOWN = function () {
    return [this.x, this.y1 + 200, this.x+10, canvasY];
}
// ---------------------------------------------------------------------------------------
// obstructions and its logic
// ---------------------------------------------------------------------------------------

function getFence() {
    return new Rectangles();
}

function obstructions() {
    if (barriers.length === 0) {
        barriers.push(getFence());
    } else {
        barriers.forEach((el, i)=> {
            fill(...el.color);
            rect(...el.UP());
            rect(...el.DOWN());
            el.changingPosition();
            if (el.x < 15) {
                barriers.splice(i, 1);
            }
        })
        if (canvasX - barriers[barriers.length - 1].x > 150) {
            barriers.push(getFence());
        }
    }

}
// ---------------------------------------------------------------------------------------
// keypressed and its logic
// ---------------------------------------------------------------------------------------
function keyPressed() {
    console.log(bird.x, bird.y)
    if (keyCode === LEFT_ARROW) {
        bird.x -= 10;
    } else if (keyCode === RIGHT_ARROW) {
        bird.x += 10;
    } else if (keyCode === UP_ARROW) {
        bird.y -= 90;
    } else if (keyCode === 32) {
        bird.changingAcceleration(false);
    }
}
// ---------------------------------------------------------------------------------------
//
// ---------------------------------------------------------------------------------------
