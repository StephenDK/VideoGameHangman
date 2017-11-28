//alert("Developed by Stephen Klein");

// Section 1: Global Variables
//=========================================================
// Arryas and variables for holding data.
var wordOptions = ["battlefield", "portal", "minecraft", "bioshock", "doom", "destiny", "quake", "fallout", "burnout", "fear", "forza"];
var selectedWord = "";
var lettersInWord = [];
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
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;
	

	// reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// populate blanks and successes with right number of blanks.
	for (var i = 0; i < numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	// Change HTML to reflect round conditions
	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	// Testing/ Debuggingdf
	 console.log(selectedWord);
	 console.log(lettersInWord);
	 console.log(numBlanks);
	 console.log(blanksAndSuccesses);
}
 
	

// Section 3: Main Process
//=========================================================

// Initiates the code the first time.
startGame();

//  Register keyclicks