document.addEventListener("DOMContentLoaded", function(event) {
  // Setup Objects
  let canvas = new Canvas(document.getElementById('canvas'));
  canvas.translate(canvas.width/2, canvas.height/2)

  let stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push(new Star(
      Math.random() * canvas.width - canvas.width / 2,
      Math.random() * canvas.height - canvas.height / 2,
      Math.random() * (canvas.width / 2)
    ));
  }

  // Run logic
  setInterval(function () {
    let xTop = -canvas.width / 2;
    let yTop = -canvas.height / 2;
    let xBottom = canvas.width / 2;
    let yBottom = canvas.height / 2;
    for (let i = 0; i < stars.length; i++) {
      stars[i].update();

      if (stars[i].needsReset(xTop, yTop, xBottom, yBottom )) {
        stars[i].reset(
          Math.random() * canvas.width - canvas.width / 2,
          Math.random() * canvas.height - canvas.height / 2,
          Math.random() * (canvas.width / 2)
        )
      }
    }
  }, 1000/60)

  // Draw Objects to the canvas
  canvas.draw(
    function () {
      for (let i = 0; i < stars.length; i++) {
        stars[i].draw(this);
      }
    }.bind(canvas)
  );
});