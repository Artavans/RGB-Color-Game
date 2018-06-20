var squares = document.querySelectorAll('.colors__item');
var colorDisplay = document.querySelector('.main__color-display');
var scoreDisplay = document.querySelector('.main__score-keeper');
var pageHeader = document.querySelector('.page-header');
var gameOver = document.querySelector('.game-over');
var playAgain = document.querySelector('#play-again');
var scoreCounter = 0;
var colors = doColors(6);
var pickedColor;

//Start new game
function startNewGame() {
  scoreCounter = 0;
  scoreDisplay.textContent = 'Score: 0';

  pageHeader.style.background = '#354984';;
      
  colors = doColors(6);
  addColorsToSquares();
  changePickedColor();
}

//Generate random Integer
function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

//Generate random RGB color
function randomColor() {
  var r = randomInteger(0, 255);
  var g = randomInteger(0, 255);
  var b = randomInteger(0, 255);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}

//Add random colors to array
function doColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}

//Add colors to the squares
function addColorsToSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
}

//Replace the hidden color
function changePickedColor() {
  pickedColor = Math.floor(Math.random() * colors.length);
  colorDisplay.textContent = colors[pickedColor];  
}

addColorsToSquares();
changePickedColor();

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {

    if (this.style.backgroundColor == colors[pickedColor]) {
      
      pageHeader.style.backgroundColor = colors[pickedColor];

      scoreCounter++;
      scoreDisplay.textContent = 'Score: ' + scoreCounter;

      colors = doColors(6);
      addColorsToSquares();
      changePickedColor();

    } else {
      gameOver.classList.add('show-message'); 
      colors[pickedColor] = false;
    }
  });
}


playAgain.addEventListener('click', function() {
  startNewGame();
  gameOver.classList.remove('show-message'); 

});




    
   

