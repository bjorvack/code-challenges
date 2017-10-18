class Cube {
    constructor (translateX = 0, translateY = 0, translateZ = 0, radius) {
        this._radius = radius;
        this._position = createVector(translateX, translateY, translateZ);
    }

    draw () {
        push();
        translate(this._position.x, this._position.y, this._position.z);
        box(this._radius);
        pop();
    }

    split () {
        let cubes = [];
        let size = this._radius / 3

        for (let x = -1; x < 2; x ++) {
            for (let y = -1; y < 2; y ++) {
                for (let z = -1; z < 2; z ++) {
                    if (abs(x) + abs(y) + abs(z) > 1) {
                        cubes.push(
                            new Cube(
                                this._position.x + x * size,
                                this._position.y + y * size,
                                this._position.z + z * size,
                                size
                            )
                        )
                    }
                }
            }
        }

        return cubes;
    }
}