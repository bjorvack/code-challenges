class Utils {
    /**
     * Loads the content off an url
     *
     * @param {string} url
     *
     * @returns {string|null}
     */
    static loadFile(url) {
        const request = new XMLHttpRequest();
        request.open('GET', url, false);  // `false` makes the request synchronous
        request.send(null);

        if (request.status === 200) {
            return request.responseText;
        }

        return null;
    }

    /**
     * Fix canvas on retina or high dppi displays
     */
    static resizeCanvasToDisplaySize(canvas) {
        const realToCSSPixels = window.devicePixelRatio || 1;
        // Lookup the size the browser is displaying the canvas in CSS pixels
        // and compute a size needed to make our drawingbuffer match it in
        // device pixels.
        let displayWidth  = Math.floor(canvas.clientWidth  * realToCSSPixels);
        let displayHeight = Math.floor(canvas.clientHeight * realToCSSPixels);

        // Check if the canvas is not the same size.
        if (canvas.width  !== displayWidth ||
            canvas.height !== displayHeight) {

            // Make the canvas the same size
            canvas.width  = displayWidth;
            canvas.height = displayHeight;
        }
    }
}