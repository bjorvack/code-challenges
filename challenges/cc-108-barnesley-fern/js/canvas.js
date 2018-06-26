class Canvas {
    constructor(id) {
        this._canvas = document.getElementById(id);
        this._context = this._canvas.getContext('2d');
        this._initialize();
        window.addEventListener('resize', this._initialize.bind(this));
    }

    get canvas() {
        return this._canvas;
    }

    get context() {
        return this._context;
    }

    map (num, in_min, in_max, out_min, out_max) {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    };

    drawPoint(point, radius, color) {
        const x = this.map(
            point.x,
            -2.1820,
            2.6558,
            0,
            (this._canvas.width / this._ratio)
        );

        const y = this.map(
            point.y,
            0,
            9.9983,
            (this._canvas.height / this._ratio),
            0
        );

        this._context.strokeStyle = "rgba(1, 1, 1, 0)";
        this._context.fillStyle = color.hex;
        this._context.beginPath();
        this._context.arc(x, y, radius, 0, 2 * Math.PI, true);
        this._context.stroke();
        this._context.fill();
    }

    _initialize() {
        let devicePixelRatio = window.devicePixelRatio || 1;
        let backingStoreRatio = this._context.webkitBackingStorePixelRatio ||
            this._context.mozBackingStorePixelRatio ||
            this._context.msBackingStorePixelRatio ||
            this._context.oBackingStorePixelRatio ||
            this._context.backingStorePixelRatio || 1;
        this._ratio = devicePixelRatio / backingStoreRatio;

        let oldWidth = document.body.clientWidth;
        let oldHeight = document.body.clientHeight;
        this._canvas.style.background = this._background;
        this._canvas.width = oldWidth;
        this._canvas.height = oldHeight;
        this._context.scale(1, 1);

        if (devicePixelRatio !== backingStoreRatio) {

            this._canvas.width = oldWidth * this._ratio;
            this._canvas.height = oldHeight * this._ratio;

            this._canvas.style.width = oldWidth + 'px';
            this._canvas.style.height = oldHeight + 'px';

            this._context.scale(this._ratio, this._ratio);
        }

        //this._context.translate(oldWidth / 2, oldHeight);
    }
}