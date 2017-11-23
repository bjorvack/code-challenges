class Renderer {
    constructor (program) {
        this._program = program;
    }

    updateModels(positions) {
        const positionAttributeLocation = gl.getAttribLocation(this._program.program, "a_position");
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        this._vao = gl.createVertexArray();
        gl.bindVertexArray(this._vao);
        gl.enableVertexAttribArray(positionAttributeLocation);

        const size = 2;          // 2 components per iteration
        const type = gl.FLOAT;   // the data is 32bit floats
        const normalize = false; // don't normalize the data
        const stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        const offset = 0;        // start at the beginning of the buffer
        gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
    }

    render() {
        // Fix canvas resolution
        Utils.resizeCanvasToDisplaySize(gl.canvas);
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

        // Clear the canvas
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Tell it to use our program (pair of shaders)
        gl.useProgram(this._program.program);

        // Bind the attribute/buffer set we want.
        gl.bindVertexArray(this._vao);

        let primitiveType = gl.TRIANGLES;
        let offset = 0;
        let count = 3;
        gl.drawArrays(primitiveType, offset, count);
    }
}