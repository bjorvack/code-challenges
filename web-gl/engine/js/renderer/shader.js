class Shader {
    constructor (gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

        if (!success) {
            console.log(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
        }

        this._shader = shader;
    }

    /**
     *
     * @param {WebGL2RenderingContext} gl
     * @param {int} type
     * @param {string} url
     * @returns {Shader}
     */
    static fromSourceFile(gl, type, url) {
        return new Shader(gl, type, Utils.loadFile(url));
    }

    get shader() {
        return this._shader;
    }
}