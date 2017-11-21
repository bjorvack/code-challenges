class Entity {
    constructor(x, y, width, height, scale) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._scale = scale;
    }

    draw (canvas) {
        throw new Error('You have to implement the method draw!');
    }

    move (x, y) {
        this._x = x;
        this._y = y;
    }

    collision (entity) {
        return (this._x === entity.x && this._y === entity.y);
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get scale() {
        return this._scale;
    }

    set scale(value) {
        this._scale = value;
    }
}