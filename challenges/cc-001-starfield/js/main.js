document.addEventListener("DOMContentLoaded", function(event) {
  // Setup Objects
  let canvas = new Canvas(document.getElementById('canvas'));
  canvas.translate(canvas.width/2, canvas.height/2)

  let stars = [];
  for (let i = 0; i < 500; i++) {
    stars.push(new Star(
      Math.random() * canvas.width - canvas.width / 2,
      Math.random() * canvas.height - canvas.height / 2,
      Math.random() * (canvas.width / 2)
    ));
  }

  // Run logic
  setInterval(function () {
    for (let i = 0; i < stars.length; i++) {
      stars[i].update();

      if (stars[i].needsReset()) {
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