
// setting my global variables
var targetScore = 0;
var currentScore = 0;
var redScore = 0;
var blueScore = 0;
var greenScore = 0;
var yellowScore = 0;
var placeHolder = 0;
var wins = 0;
var losses = 0;

//functions to update thigns 

function resetScores() {
// sets target score at start of game
targetScore = Math.floor(Math.random() * 120) + 1;
// console.log(targetScore);
// sets gem scores
redScore = Math.floor(Math.random() * 12) + 1;
blueScore = Math.floor(Math.random() * 12) + 1;
greenScore = Math.floor(Math.random() * 12) + 1;
yellowScore = Math.floor(Math.random() * 12) + 1;

console.log(redScore);
console.log(blueScore);
console.log(greenScore);
console.log(yellowScore);

currentScore = 0;

};

function readCurrent() {
    $(".currentScoreFill").text(currentScore)
};
function readTarget() {
    $(".targetScoreFill").text(targetScore)
};
function readWins() {
    $(".winsFill").text(wins);
};
function readLoss() {
    $(".lossFill").text(losses);
};


//starts when page loads
$(document).ready(function() {
resetScores();
readCurrent();
readTarget();
readWins();
readLoss();
});


//when you press a button...
$("#red").on("click", function() {
    // console.log(redScore);
    if (currentScore < targetScore) {
        placeHolder = currentScore;
        currentScore = placeHolder + redScore;
        readCurrent();
    }
    else if (currentScore === targetScore) {
        wins++;
        readWins();
        resetScores();
        readCurrent();
        readTarget();
        alert("You've won!");
    }
    else {
        losses++;
        readLoss();
        resetScores();
        readCurrent();
        readTarget();
        
    }
});
$("#blue").on("click", function() {
    // console.log(blueScore);
    if (currentScore < targetScore) {
        placeHolder = currentScore;
        currentScore = placeHolder + blueScore;
        readCurrent();
    }
    else if (currentScore === targetScore) {
        wins++;
        readWins();
        resetScores();
        readCurrent();
        readTarget();
        alert("You've won!");
    }
    else {
        losses++;
        readLoss();
        resetScores();
        readCurrent();
        readTarget();
    }

});
$("#green").on("click", function() {
    // console.log(greenScore);
    if (currentScore < targetScore) {
        placeHolder = currentScore;
        currentScore = placeHolder + greenScore;
        readCurrent();
    }
    else if (currentScore === targetScore) {
        wins++;
        readWins();
        resetScores();
        readCurrent();
        readTarget();
        alert("You've won!");
    }
    else {
        losses++;
        readLoss();
        resetScores();
        readCurrent();
        readTarget();
    }

});
$("#yellow").on("click", function() {
    // console.log(yellowScore);
    if (currentScore < targetScore) {
        placeHolder = currentScore;
        currentScore = placeHolder + yellowScore;
        readCurrent();
    }
    else if (currentScore === targetScore) {
        wins++;
        readWins();
        resetScores();
        readCurrent();
        readTarget();
        alert("You've won!");
    }
    else {
        losses++;
        readLoss();
        resetScores();
        readCurrent();
        readTarget();
    }

});
