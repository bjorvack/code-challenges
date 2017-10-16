class Star {
  constructor (x, y, z = 100) {
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

  update () {
    this._z -= 50;
  }

  needsReset(xTop, yTop, xBottom, yBottom) {
    let coordX = this._x / this._z;
    let coordY = this._y / this._z;

    if (this._z < 1) {
      return true;
    }

    if (xTop < coordX &&
      xBottom > coordX &&
        yTop < coordY &&
        yBottom > coordY
    ) {
      return false;
    }

    return true;
  }

  reset (x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  draw(canvas) {
    canvas.context.fillStyle="#FFFFFF";

    let coordX = this._x / this._z * canvas.width;
    let coordY = this._y / this._z * canvas.height;

    canvas.context.fillRect(coordX, coordY, 1, 1);
  }
}