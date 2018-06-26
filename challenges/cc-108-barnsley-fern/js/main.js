document.addEventListener("DOMContentLoaded", function() {
    let canvas = new Canvas('canvas');
    let color = new Color(200,30,40);
    let point = new Point(0, 0);

    const draw = function(){
        for (let i = 0; i < 100; i++) {
            canvas.drawPoint(point, 2, color);
            point = getNextPoint(point);
        }

        window.requestAnimationFrame(draw);
    }

    const getNextPoint = function(point) {
        let chance = Math.random();

        if(chance <= 0.01) {
            return new Point(0, 0.16 * point.y);
        } else if(chance <= 0.86) {
            return new Point(
                0.85 * point.x + 0.04 * point.y,
                -0.04 * point.x + 0.85  * point.y + 1.6
            );
        } else if (chance <= 0.93) {
            return new Point(
                0.2 * point.x - 0.26 * point.y,
                0.23 * point.x + 0.22 * point.y + 1.6
            );
        } else {
            return new Point(
                -0.15 * point.x + 0.28 * point.y,
                0.26 * point.x + 0.24 * point.y + 0.44
            );
        }
    };

    window.requestAnimationFrame(draw);
});




