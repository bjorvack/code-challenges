let cubes = [];
let a = 0;
let clicked = 0;

function setup() {
  createCanvas(document.body.clientWidth, document.body.clientHeight, 'webgl');

  cubes.push(new Cube(0,0,0, 200));
}

function mousePressed() {
    if (clicked < 3) {
        // Generate the next set of boxes
        var next = [];
        for (let i = 0; i < cubes.length; i++) {
            let b = cubes[i];
            let newBoxes = b.split();
            next = next.concat(newBoxes);
        }
        cubes = next;
    }

    clicked ++;
}

function draw() {
    background('#222222');

    rotateX(a);
    rotateY(a * 0.4);
    rotateZ(a * 0.1);

    for (let i = cubes.length - 1; i >= 0; i --) {
      cubes[i].draw();
    }
    a += 0.01;
}

