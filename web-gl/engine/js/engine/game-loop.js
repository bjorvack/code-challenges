class GameLoop {
    constructor () {
        const vertexShader = Shader.fromSourceFile(gl, gl.VERTEX_SHADER, './shaders/vertex-shader.glsl');
        const fragmentShader = Shader.fromSourceFile(gl, gl.FRAGMENT_SHADER, './shaders/fragment-shader.glsl');
        const program = new ShaderProgram(gl, vertexShader, fragmentShader);

        this._renderer = new Renderer(program);
        this._running = false;
    }

    start () {
        this._running = true;

        /** Main game loop */
        let loop = setInterval(function () {
            if (!this._running) {
                clearInterval(loop);
                
                return;
            }

            this._renderer.updateModels([
                0, 0,
                0, 0.5,
                0.7, 0,
            ]);

            /** Main draw loop */
            requestAnimationFrame(function() {
                this._renderer.render()
            }.bind(this));
        }.bind(this));

    }

    stop () {
        this._running = false;
    }
}