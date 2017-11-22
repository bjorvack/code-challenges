class Canvas {
    constructor() {
        // Create canvas in the DOM
        let canvas = document.createElement('canvas');
        canvas.id = Util.randomString();
        document.body.appendChild(canvas);

        this._context = canvas.getContext("webgl2");
    }

    draw (drawFunction) {
        this._resize(this.gl);
        this._context.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        drawFunction(this.gl);
    }

    _resize(gl) {
        const realToCSSPixels = window.devicePixelRatio || 1;
        // Lookup the size the browser is displaying the canvas in CSS pixels
        // and compute a size needed to make our drawingbuffer match it in
        // device pixels.
        let displayWidth  = Math.floor(gl.canvas.clientWidth  * realToCSSPixels);
        let displayHeight = Math.floor(gl.canvas.clientHeight * realToCSSPixels);

        // Check if the canvas is not the same size.
        if (gl.canvas.width  !== displayWidth ||
            gl.canvas.height !== displayHeight) {

            // Make the canvas the same size
            gl.canvas.width  = displayWidth;
            gl.canvas.height = displayHeight;
        }
    }

    get gl() {
        return this._context;
    }
}