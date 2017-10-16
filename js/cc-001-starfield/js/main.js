document.addEventListener("DOMContentLoaded", function(event) {
  // Setup Objects
  let canvas = new Canvas(document.getElementById('canvas'));
  canvas.translate(canvas.width/2, canvas.height/2)

  let stars = [];

  for (let i = 0; i < 100; i++) {
    stars.push(new Star(
      Math.random() * canvas.width - canvas.width / 2,
      Math.random() * canvas.height - canvas.height / 2,
      Math.random()
    ));
  }


  // Run logic
  setInterval(function () {
    for (let i = 0; i < stars.length; i++) {
      stars[i].update();

      if (!stars[i].needsReset(
          -canvas.width / 2,
          -canvas.height / 2,
          canvas.width / 2,
          canvas.height / 2
        )) {
        stars[i].reset(
          Math.random() * canvas.width - canvas.width / 2,
          Math.random() * canvas.height - canvas.height / 2,
          Math.random()
        )
      }
    }
  })

  // Draw Objects to the canvas
  canvas.draw(
    function () {
      for (let i = 0; i < stars.length; i++) {
        stars[i].draw(this);
      }
    }.bind(canvas)
  );
});