class Validate {
  constructor(a) {
    this.a = a;
  }
  static isNumber(val) {
    return typeof val === "number";
  }
  static isInt(val) {
    return Number.isInteger(val);
  }
  static isFloat(val) {
    return val % 1 !== val && Number.isFloat(val);
  }
  static isChar(val) {
    return typeof val === "string" && val.length === 1;
  }
  static isString(val) {
    return typeof val === "string";
  }
  static isBoolean(val) {
    return val === true;
  }
  static isArray(val) {
    return Array.isArray(val);
  }
  static toMoney(val) {
    return (~~val).toLocaleString() + String((val % 1).toFixed(2)).slice(1);
  }
}
