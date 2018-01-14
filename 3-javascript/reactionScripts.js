
var startTime = new Date().getTime();

var gameObject = document.getElementById("gameObject");

appearAfterDelay();

gameObject.onclick = function() {
  gameObject.style.display = "none";

  var endTime = new Date().getTime();
  var timeTaken = ( endTime - startTime ) / 1000;

  document.getElementById( "timeTaken" ).innerHTML = timeTaken + "s";

  appearAfterDelay();
};

function appearAfterDelay() {
  setTimeout( makeShapeAppear() , ( Math.random() * 2000 ) );
}

function makeShapeAppear() {
  var top   = Math.random() * 500;
  var left  = Math.random() * ( 1000 );
  var width = ( Math.random() * 350 ) + 100;

  if ( Math.random() > 0.5 ) {
    gameObject.style.borderRadius = "50%";

  } else {
    gameObject.style.borderRadius = "0";

  }

  setStyle( width, top, left );
  
  startTime = new Date().getTime();
}

function setStyle( width, top, left ) {
  gameObject.style.backgroundColor = getRandomColor();
  gameObject.style.width   = width + "px";
  gameObject.style.height  = width + "px";
  gameObject.style.top     = top + "px";
  gameObject.style.left    = left + "px";
  gameObject.style.display = "block";
}

// Create color hex value
function getRandomColor() {
  // Creates an array of strings, easier to access
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';

  for( var i = 0; i < 6; i++ ) {
    color += letters[ Math.floor( Math.random() * 16 ) ];

  }

  return color;
}