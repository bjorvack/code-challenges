class Renderer {
    constructor (program) {
        this._program = program;
    }

    render(mesh) {
        const positionAttributeLocation = gl.getAttribLocation(this._program.program, "a_position");
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.vertices), gl.STATIC_DRAW);

        // Set a random color.
        let colorLocation = gl.getUniformLocation(this._program.program, "u_color");
        gl.uniform4f(colorLocation, mesh.color.r, mesh.color.g, mesh.color.b, mesh.color.a);

        this._vao = gl.createVertexArray();
        gl.bindVertexArray(this._vao);
        gl.enableVertexAttribArray(positionAttributeLocation);

        gl.vertexAttribPointer(
            positionAttributeLocation,
            2, // 2 components per iteration,
            gl.FLOAT,   // the data is 32bit floats
            false, // don't normalize the data
            0, // 0 = move forward size * sizeof(type) each iteration to get the next position,
            0 // start at the beginning of the buffer
        );

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

        gl.drawArrays(
            gl.TRIANGLES, // primitiveType
            0, // offset
            mesh.vertices.length / 2 // count
        );
    }
}