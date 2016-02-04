window.onload = function(){
  console.log('App started');
  var canvas = document.getElementById('main');
  var context = canvas.getContext('2d');

  var leftButton = document.getElementById('button-left');
  var rightButton = document.getElementById('button-right');
  var upButton = document.getElementById('button-up');
  var downButton = document.getElementById('button-down');
  var resetButton = document.getElementById('reset');
  var dropdown = document.getElementById('colourList');

  var xPosition = 50;
  var yPosition = 50;
  var sketchIncrement = 10;
  //context.strokeStyle = "black";
  context.lineWidth = 10;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(xPosition, yPosition);

  leftButton.onclick=function(){
    console.log('Left');
    context.lineTo(xPosition - sketchIncrement, yPosition);
    context.stroke();
    xPosition -= sketchIncrement;
  };

  rightButton.onclick=function(){
    console.log('Right');
    context.lineTo(xPosition + sketchIncrement, yPosition);
    context.stroke();
    xPosition += sketchIncrement;
  };

  upButton.onclick=function(){
    console.log('Up');
    context.lineTo(xPosition, yPosition - sketchIncrement);
    context.stroke();
    yPosition -= sketchIncrement;
  };

  downButton.onclick=function(){
    console.log('Down');
    context.lineTo(xPosition, yPosition + sketchIncrement);
    context.stroke();
    yPosition += sketchIncrement;
  };

  resetButton.onclick=function(){
    console.log('Reset');
    context.clearRect(0,0, canvas.width, canvas.height);
    xPosition = 50;
    yPosition = 50;
    context.beginPath();
  }

  dropdown.onchange = function(){
    var picked = this.value;
    console.log(picked);
    context.beginPath();
    context.strokeStyle = picked;
  }

};
