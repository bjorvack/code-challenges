class Main {
    constructor () {
        console.log('Setting up the engine');
        this._canvas = new Canvas();
    }

    /**
     * Runs the game logic
     */
    run () {
        this._draw();
    }

    _draw() {
        console.log('Draw the scene')
        this._canvas.draw(function (gl) {
            console.log(gl);
        });
    }
}

let main;

document.addEventListener("DOMContentLoaded", function() {
    main = new Main();
    main.run();
});