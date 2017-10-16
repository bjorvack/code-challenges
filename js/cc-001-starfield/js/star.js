class Star {
  constructor (x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get z() {
    return this._z;
  }

  draw(canvas) {
    canvas.context.fillStyle="#61ff59";
    canvas.context.fillRect(this._x - 5, this._y -5, 11, 11);
  }
}