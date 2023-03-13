class Test4 extends Test2 {
  set testProp(a) {
    this._testProp = a * 10;
  }
  get testProp() {
    return this._testProp > 100 ? this._testProp : false;
  }
}
