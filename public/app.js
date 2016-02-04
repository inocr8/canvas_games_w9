window.onload = function(){
  console.log('App started');
  var canvas = document.getElementById('main');
  var context = canvas.getContext('2d');

  var leftButton = document.getElementById('button-left');
  var rightButton = document.getElementById('button-right');
  var upButton = document.getElementById('button-up');
  var downButton = document.getElementById('button-down');

  var xPosition = 50;
  var yPosition = 50;
  var sketchIncrement = 10;
  context.beginPath();

  // context.fillStyle = "wheat";
  // context.fillRect(10, 10, 100, 50);

  
  // context.moveTo(100,100);
  // context.lineTo(100,150);
  // context.stroke();

  // var drawCircle = function(x,y) {
  //   context.beginPath();
  //   context.arc(x, y, 25, 0, 2 * Math.PI);
  //   context.stroke();
  //   context.fill();
  // }


  // canvas.onclick = function(event) {
  //   console.log('clicked', event);
  //   x = event.x;
  //   y = event.y;
  //   drawCircle(x,y);
  // }

  leftButton.onclick=function(){
    console.log('Left');
  };

  rightButton.onclick=function(){
    console.log('Right');
    context.moveTo(xPosition, yPosition);
    context.lineTo(xPosition + sketchIncrement, yPosition);
    context.stroke();
    xPosition += sketchIncrement;
  };

  upButton.onclick=function(){
    console.log('Up');
  };

  downButton.onclick=function(){
    console.log('Down');
  };

};
