//GLOBAL VARIBALES
var answerVal = 0;
var allTheJewels = {
    ruby: 0,
    jade: 0,
    garnet: 0, 
    sapphire: 0
};

var counter = 0;
phase = true;
wins = 0;
losses = 0;


//when page loads, randomly generate a number to be guessed, and randomly generate value of all 4 crystals
$( document ).ready(function() {
    console.log( "ready!" );

function setUpGame (){
    //store answerVal
    var winningNum = Math.floor(Math.random() * 102 + 19);
    console.log("winning number= " + winningNum);
    answerVal += winningNum;
    console.log(answerVal);
    $(".answerVal").append("This is the number you want: " + answerVal);
}

function assignJewelValue() {
    for (var value in allTheJewels) {
        allTheJewels[value] = Math.floor(Math.random() * 13 + 1);
    }
    console.log(allTheJewels);

};

//if user presses jewelOne and counter < winningnum add val jewelOne to userGuess (repeat for all jewels)
//else alert user game over

//FUNCTIONS


//when user clicks on a gem, store this value and add this value to userGuess (if, else)
        function addRubyClickHandler() {
            $(".ruby").on("click", function() {
            console.log("You Clicked Me!");
            onRubyClick(phase, allTheJewels.ruby);
            });
        };

        function onRubyClick(phs, valU) {
            if (counter < answerVal) {
            counter += valU;
            console.log("Your Score: " + counter);
            $(".counter").html("Your current score: " + counter);
            }
            else {
            console.log("YOU LOSE");
            };
        };

        function addJadeClickHandler() {
            $(".jade").on("click", function() {
            console.log("You Clicked Me!");
            onJadeClick(phase, allTheJewels.jade);
            });
        };

        function onJadeClick(phs, valU) {
            if (phs) {
            counter += valU;
            console.log("Your Score: " + counter);
            $(".counter").html("Your current score: " + counter);
            }
            else {
            secondNumber += valU;
            console.log("secondNumber: " + secondNumber);
            };
        };

        function addGarnetClickHandler() {
            $(".garnet").on("click", function() {
            console.log("You Clicked Me!");
            onGarnetClick(phase, allTheJewels.garnet);
            });
        };

        function onGarnetClick(phs, valU) {
            if (phs) {
            counter += valU;
            console.log("Your Score: " + counter);
            $(".counter").html("Your current score: " + counter);
            }
            else {
            secondNumber += valU;
            console.log("secondNumber: " + secondNumber);
            };
        };

        function addSapphireClickHandler() {
            $(".sapphire").on("click", function() {
            console.log("You Clicked Me!");
            onSapphireClick(phase, allTheJewels.sapphire);
            });
        };

        function onSapphireClick(phs, valU) {
            if (phs) {
            counter += valU;
            console.log("Your Score: " + counter);
            $(".counter").html("Your current score: " + counter);
            }
            else {
            secondNumber += valU;
            console.log("secondNumber: " + secondNumber);
            };
        };


//

// totalScore = additionArray.reduce(addArray)
// //function to add all elements in array

// function addArray(total, num) {
//     return total + num;
// }


//keep adding user guess until userGuess >= answerVal
//when userGuess = answerVal, GAMEOVER and user Wins +1
//when userGuess > answerVal, GAMEOVER and user loses +1
//once GAMEOVER, reset userGuess, assign random new values to answerVal and gems

//store all clicked jewels into a userGuess array set to phase
    //store all clicked jewels as long as userGuess array < answerVal
    //trigger GAMEOVER if userGuess > answerVal

//CALL TO FUNCTIONS

setUpGame(); 
assignJewelValue();
addRubyClickHandler();
addJadeClickHandler();
addGarnetClickHandler();
addSapphireClickHandler() ;
});