document.addEventListener("DOMContentLoaded", function(event) {
  // Setup Objects
  let canvas = new Canvas(document.getElementById('canvas'));

  // Run logic
  setInterval(function () {
  })

  // Draw Objects to the canvas
  canvas.draw(
    function () {
      console.log('draw');
    }
  );
});