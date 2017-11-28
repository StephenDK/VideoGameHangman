//alert("Developed by Stephen Klein");

// Section 1: Global Variables
//=========================================================
// Arryas and variables for holding data.
var wordOptions = ["battlefield", "portal", "minecraft", "bioshock", "doom", "destiny", "quake", "fallout", "burnout", "fear"];
var selectedWord = "";
var lattersInWord = [];
var numBlanks =0;
var blanksAndSuccesses = [];
var wrongLetters =[];

// game counters
var winCount = 0;
var loseCount = 0;
var guessesLeft =9;


// Section 2: Functions
//=========================================================
	
function startGame() {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

	// Testing/ Debuggingdf
	 console.log(selectedWord);
}
 


// Section 3: Main Process
//=========================================================
startGame();