class Mesh {
    constructor (vertices, indices, color) {
        this._vertices = vertices;
        this._indices = indices;
        this._color = color;
    }

    get vertices() {
        return this._vertices;
    }

    get indices() {
        return this._indices;
    }

    get color() {
        return this._color;
    }
}