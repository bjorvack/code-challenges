class Snake extends Entity {
    constructor (x, y, width, height, scale, color) {
        super(x, y, width, height, scale);
        this._color = color;
        this._direction = 'right';
        this._body = [];
    }

    get color() {
        return this._color;
    }

    get body() {
        return this._body;
    }

    die() {
        this._body = [];
    }

    draw (canvas) {
        canvas.context.fillStyle = this._color;
        canvas.context.fillRect(this._x, this._y, this._width * this._scale, this._height * this._scale);

        for (let length = this._body.length; length > 0; length-- ) {
            let width = this._width - ((this._body.length + length) / 10);
            let height = this._height - ((this._body.length + length) / 10);
            if (width < 3) { width = 3; }
            if (height < 3) { height = 3; }

            canvas.context.fillRect(
                this._body[length - 1].x + (this._width - width) / 2 * this._scale,
                this._body[length - 1].y + (this._height - height) / 2 * this._scale,
                width * this._scale,
                height * this._scale
            );
        }
    }

    slither() {
        const lenght = this._body.length;

        if (lenght > 0) {
            this._body.push({x: this._x, y: this._y});
            this._body.splice(0, 1);
        }

        switch (this._direction) {
            case 'right': this._x += this._width * this._scale;
                break;
            case 'left': this._x -= this._width * this._scale;
                break;
            case 'up': this._y -= this._height * this._scale;
                break;
            case 'down': this._y += this._height * this._scale;
                break;
        }
    }

    eat(food) {
        this._body.push({x: food.x, y: food.y});
        console.log((this._body));
    }

    handleKeyBoardInput(keyboard) {
        if (keyboard.isKeyPressed(38)) { // up
            this._direction = 'up';
        }

        if (keyboard.isKeyPressed(37)) { // left
            this._direction = 'left';
        }

        if (keyboard.isKeyPressed(39)) { // right
            this._direction = 'right';
        }

        if (keyboard.isKeyPressed(40)) { // down
            this._direction = 'down';
        }
    }
}