// Go ahead and define your class :)
class Cube {
  constructor(length) {
    this.length = length;
  }
  get surfaceArea() {
    return 6 * (this.length * this.length)
  }
  set surfaceArea(value) {
    this.length = Math.round((value / 6) ** 0.5)
  }
  get volume() {
    return this.length * this.length * this.length;
  }
  set volume(value) {
    this.length = Math.round(value ** 0.33333)
  }
}