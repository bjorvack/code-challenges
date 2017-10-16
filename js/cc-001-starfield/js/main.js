document.addEventListener("DOMContentLoaded", function(event) {
  // Setup Objects
  let canvas = new Canvas(document.getElementById('canvas'));
  let star = new Star(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    Math.random()
  );


  // Run logic
  setInterval(function () {
  })

  // Draw Objects to the canvas
  canvas.draw(
    function () {
      star.draw(this);
    }.bind(canvas)
  );
});