class Keyboard {
    constructor() {
        this._pressedKeys = [];

        document.addEventListener('keydown', function(event) {
            this._pressedKeys.push(event.keyCode);
            this._pressedKeys = this._pressedKeys.filter(function(item, pos){
                return this._pressedKeys.indexOf(item) == pos;
            }.bind(this));
        }.bind(this));

        document.addEventListener('keyup', function(event) {
            let index = this._pressedKeys.indexOf(event.keyCode);

            if (index > -1) {
                this._pressedKeys.splice(index, 1);
            }
        }.bind(this));
    }

    isKeyPressed(keyCode) {
        return this._pressedKeys.indexOf(keyCode) > -1;
    }

    get pressedKeys() {
        return this._pressedKeys;
    }
}