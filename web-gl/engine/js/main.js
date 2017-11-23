const canvas = document.getElementById("display");
const gl = canvas.getContext("webgl2");
let gameLoop;

document.addEventListener("DOMContentLoaded", function() {
    if (!gl) {
        console.log('no webgl support');

        return false;
    }

    gameLoop = new GameLoop();
    gameLoop.start();
});