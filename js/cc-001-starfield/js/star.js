class Star {
  constructor (x, y, z = 0) {
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
    this._z += (this._z / 300) +0.001;
  }

  needsReset(xTop, yTop, xBottom, yBottom) {
    let coordX = this._x * this._z;
    let coordY = this._y * this._z;

    if (xTop < coordX &&
      xBottom > coordX &&
        yTop < coordY &&
        yBottom > coordY
    ) {
      return true;
    }

    return false;
  }

  reset (x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  draw(canvas) {
    canvas.context.fillStyle="#FFFFFF";

    let coordX = this._x * this._z;
    let coordY = this._y * this._z;

    canvas.context.fillRect(coordX, coordY, 1, 1);
  }
}