class ShaderProgram {
    constructor (gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader.shader);
        gl.attachShader(program, fragmentShader.shader);
        gl.linkProgram(program);

        const success = gl.getProgramParameter(program, gl.LINK_STATUS);

        if (!success) {
            console.log(gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
        }

        this._program = program;
    }

    get program() {
        return this._program;
    }
}