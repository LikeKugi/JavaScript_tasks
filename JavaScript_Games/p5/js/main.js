// ---------------------------------------------------------------------------------------
// variables and constants
// ---------------------------------------------------------------------------------------
// game difficult
var difficult = new Difficult();
// bird image
var birdImg;
// canvas size
var canvasX = 1024;
var canvasY = 768;

var bird = new Bird();
let barriers = [];
var progressingGame = true;


const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const resetGame = () => {
    resetObstructions();
    bird.init();
    progressingGame = true;
}

// ---------------------------------------------------------------------------------------
// SETUP and DRAWING
// ---------------------------------------------------------------------------------------
function setup() {
    createCanvas(canvasX, canvasY);
    background(230, 230, 200);
    birdImg = loadImage("img/birds-9515.png");
}

function draw() {
    if (!progressingGame) return;
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
    this.x = canvasX / 4;
    this.y = canvasY / 4;
    this.yV = 1;
    this.accel = 0.07 + difficult.level/50;
}
Bird.prototype.changingAcceleration = function (down = true) {
    if (down) {
        this.yV += this.accel;
        if (canvasY - this.y < 50) this.yV = 0;
    } else {
        this.yV = 1;
        this.yV -= (90 * bird.accel) < 5 ? (90 * bird.accel) : 4.95;
        console.log(this.yV, bird.accel)
    }
}
Bird.prototype.changingPosition = function () {
    // this.x = (this.x + 0.5) % canvasX;
    this.y = ((this.y + this.yV) % canvasY) > 0 ? (this.y + this.yV) % canvasY : this.yV = 0 && 0;

    this.changingAcceleration()
}
Bird.prototype.init = function () {
    this.x = canvasX / 4;
    this.y = canvasY / 4;
    this.yV = 1;
    this.initAccel();
}
Bird.prototype.initAccel = function () {
    this.accel = 0.05 + difficult.level/400;
}
Bird.prototype.getCoords = function () {
    return [this.x - 10, this.y - 10, this.x + 10, this.y + 10];
}
// ---------------------------------------------------------------------------------------
// Barrier and its logic
// ---------------------------------------------------------------------------------------

function Rectangles() {
    this.x = canvasX;
    this.y1 = randomInteger(canvasY / 5, canvasY / 3);
    this.y2 = this.y1 + randomInteger(200, 300);
    this.color = [randomInteger(10, 250), randomInteger(10, 250), randomInteger(10, 250)]
}
Rectangles.prototype.changingPosition = function () {
    this.x -= (1 + 0.5 * difficult.level);
}
Rectangles.prototype.UP = function () {
    return [this.x, 0, this.x + 10, this.y1];
}
Rectangles.prototype.DOWN = function () {
    return [this.x, this.y2, this.x + 10, canvasY];
}
Rectangles.prototype.getHole = function () {
    return [this.x, this.y1, this.x+10, this.y2]
}
// ---------------------------------------------------------------------------------------
// obstructions and its logic
// ---------------------------------------------------------------------------------------

function getFence() {
    return new Rectangles();
}

function obstructions() {
    let birdCoords = bird.getCoords();  // [bx1, by1, bx2, by2]
    if (barriers.length === 0) {
        barriers.push(getFence());
    } else {
        barriers.forEach((el, i)=> {
            let elCoords = el.getHole();
            if (Math.abs(elCoords[0] - birdCoords[0]) < 10 || Math.abs(elCoords[2] - birdCoords[2]) < 10) {
                if (!checkCollision(birdCoords, elCoords)) {
                    console.log('collision');
                }
            }

            fill(...el.color);
            rect(...el.UP());
            rect(...el.DOWN());
            el.changingPosition();
            if (el.x < 15) {
                barriers.splice(i, 1);
            }
        })
        if (canvasX - barriers[barriers.length - 1].x > (150 + 10 * difficult.level)) {
            barriers.push(getFence());
        }
    }
}
function checkCollision(birdCoords, barrierCoords) {
    return birdCoords[1] > barrierCoords[1] && birdCoords[3] < barrierCoords[3]
}
function resetObstructions() {
    barriers.length = 0;
}
// ---------------------------------------------------------------------------------------
// DIFFICULT level logic
// ---------------------------------------------------------------------------------------
function Difficult() {
    this.level = 3;
}
Difficult.prototype.increase = function () {
    this.level += 1;
}
Difficult.prototype.decrease = function () {
    this.level > 1 ? this.level -= 1 : this.level = 0;
}
function increaseLevel() {
    this.difficult.increase();
    bird.initAccel();
}
function decreaseLevel() {
    this.difficult.decrease();
    bird.initAccel();
}
// ---------------------------------------------------------------------------------------
// keypressed and its logic
// ---------------------------------------------------------------------------------------
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        decreaseLevel();
    } else if (keyCode === RIGHT_ARROW) {
        increaseLevel();
    } else if (keyCode === UP_ARROW) {
        progressingGame = false;
        setTimeout(resetGame, 3000);
    } else if (keyCode === DOWN_ARROW) {
        progressingGame = !progressingGame;
    } else if (keyCode === 32) {
        bird.changingAcceleration(false);
    }
}
// ---------------------------------------------------------------------------------------
//
// ---------------------------------------------------------------------------------------
