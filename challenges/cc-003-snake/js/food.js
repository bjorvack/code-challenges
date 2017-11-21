class Food extends Entity {
    constructor (x, y, width, height, scale, color) {
        super(x, y, width, height, scale);
        this._color = color;
    }

    get color() {
        return this._color;
    }

    draw (canvas) {
        canvas.context.fillStyle = this._color;
        canvas.context.fillRect(this._x, this._y, this._width * this._scale, this._height * this._scale);
    }
}