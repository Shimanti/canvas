function heart() {
  document.querySelector('h1').innerHTML = "You are loved"
  document.querySelector('#face').style.display = "none"
  const heart = document.getElementById('heart');
  heart.style.display = "inline"
  if (heart.getContext) {
    var ctx = heart.getContext('2d');

    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}


function happyFace() {
  document.querySelector('h1').innerHTML = "You are learning"
  document.querySelector('#heart').style.display = "none"
  const canvas = document.getElementById('face');
  canvas.style.display = "inline"
  if (canvas.getContext) {
     let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
  }
}
