
class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get volume() {
    return this.length * this.width * this.height;
  }

  get surfaceArea() {
    return this.length * this.width * 2 + this.length * this.height * 2 + this.width * this.height * 2;
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}

var cuboid = new Cuboid(1, 2, 3);
console.log(cuboid.length, 1);
console.log(cuboid.width, 2);
console.log(cuboid.height, 3);
console.log(cuboid.volume, 6);
console.log(cuboid.surfaceArea, 22);
cuboid.length = 4;
console.log(cuboid.volume, 24);
console.log(cuboid.surfaceArea, 52);
cuboid.width = 5;
console.log(cuboid.volume, 60);
console.log(cuboid.surfaceArea, 94);
console.log();
console.log(cuboid.volume, 120);
console.log(cuboid.surfaceArea, 148);
[cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9];
console.log(cuboid.volume, 504);
console.log(cuboid.surfaceArea, 382);
