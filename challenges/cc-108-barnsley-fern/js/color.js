class Color {
    constructor(r, g, b) {
        this._r = r;
        this._g = g;
        this._b = b;
    }

    get r() {
        return this._r;
    }

    get g() {
        return this._g;
    }

    get b() {
        return this._b;
    }

    get hex() {
        function componentToHex(c) {
            let hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }

        return "#" + componentToHex(this._r) + componentToHex(this._g) + componentToHex(this._b);
    }
}