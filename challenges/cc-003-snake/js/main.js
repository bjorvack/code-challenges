document.addEventListener("DOMContentLoaded", function(event) {
  // Setup Objects
  let canvas = new Canvas(document.getElementById('canvas'));
  canvas.translate(canvas.width/2, canvas.height/2)

  // Run logic
  setInterval(function () {

  }, 1000/60)

  // Draw Objects to the canvas
  canvas.draw(
    function () {

    }.bind(canvas)
  );
});