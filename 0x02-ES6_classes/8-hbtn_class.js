export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter and Setter for size
  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  // Getter and Setter for location
  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](dataType) {
    if (dataType === 'string') {
      return (`${this._location}`);
    } if (dataType === 'number') {
      return (`${this._size}`);
    }
    return (`${this._location}`);
  }
}
