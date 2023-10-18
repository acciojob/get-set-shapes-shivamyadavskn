class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Call the parent class constructor with the same side for width and height
  }

  getPerimeter() {
    return 4 * this._width; // Perimeter of a square is 4 times its side
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
