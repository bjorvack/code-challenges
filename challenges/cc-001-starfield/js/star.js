class Star {
  constructor (x, y, z = 100) {
    this._x = x;
    this._y = y;
    this._z = z;

    this._lastZ = z + 1;
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
    this._lastZ = this._z;
    this._z -= 30;
  }

  needsReset() {
    if (this._z <= 0) {
      return true;
    }

    return false;
  }

  reset (x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._lastZ = z + 1;
  }

  draw(canvas) {
    let lastCoordX = this._x / this._lastZ * canvas.width;
    let lastCoordY = this._y / this._lastZ * canvas.height;

    let coordX = this._x / this._z * canvas.width;
    let coordY = this._y / this._z * canvas.height;


    canvas.context.lineWidth=1;
    canvas.context.fillStyle="#FFFFFF";
    canvas.context.strokeStyle="#FFFFFF";
    canvas.context.beginPath();
    canvas.context.moveTo(lastCoordX, lastCoordY);
    canvas.context.lineTo(coordX, coordY);
    canvas.context.stroke();

    canvas.context.fillRect(coordX, coordY, 1, 1);
  }
}