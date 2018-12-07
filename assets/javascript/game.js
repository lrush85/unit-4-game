$(document).ready(function () {

//Set Variables
// this version only allows numbers between 10 and 99 to display.
var randomNumber = Math.floor(Math.random() * ((99-10)+ 1) + 10);

$(".random-number").append(randomNumber);

// The counters
var counter = 0;
var wins = 0;
var losses = 0;
var totalWin = 0;
var totalLoss = 0;

// You will be given a random number at the start of the game.



// There are four crystals below. By clicking on a crystal you will a specific amount of points to your total score.

// House all click functions in to a function
// function clickJewel() {

$(".red-jewel").on("click", function(){
    //Random number 1 - 5
    var redJewel = 2;
    counter += redJewel;
    console.log(counter);
    $(".score").text(counter);

    if(counter === randomNumber) {
        console.log("You win!");
        wins++;
        $("#win").text(wins);
        clear();
        
    } else if (counter > randomNumber) {
        console.log("You Loss!");
        losses++;
        $("#loss").text(losses);
        clear();
    }

});

$(".blue-jewel").on("click", function(){
    //Random number 5 - 7
    var blueJewel = 5;
    counter +=blueJewel;
    console.log(counter);
    $(".score").text(counter);

    if(counter === randomNumber) {
        console.log("You win!");
        wins++;
        $("#win").text(wins);
        clear();
        
    } else if (counter > randomNumber) {
        console.log("You Loss!");
        losses++;
        $("#loss").text(losses);
        clear();
        
    }

});

$(".yellow-jewel").on("click", function(){
    //Random number 7 - 10
    var yellowJewel = 7;
    counter += yellowJewel;
    console.log(counter);
    $(".score").text(counter);

    if(counter === randomNumber) {
        console.log("You win!");
        wins++;
        $("#win").text(wins);
        clear();
        
    } else if (counter > randomNumber) {
        console.log("You Loss!");
        losses++;
        $("#loss").text(losses);
        clear();
        
    }

});

$(".green-jewel").on("click", function(){
    //Random number 10 - 15
    var greenJewel = 10;
    counter += greenJewel;
    console.log(counter);
    $(".score").text(counter);

    if(counter === randomNumber) {
        console.log("You win!");
        wins++;
        $("#win").text(wins);
        clear();
        
    } else if (counter > randomNumber) {
        console.log("You Loss!");
        losses++;
        $("#loss").text(losses);
        clear();
        
    }

});

// }

// clickJewel(); // call clickJewel function

function clear() {
    counter = 0;
    $(".random-number, .score").empty();
    var newRandomNumber = Math.floor(Math.random() * ((99-10)+ 1) + 10);
    $(".random-number").append(newRandomNumber);

}

// You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.

// The value of each crystal is hidden from you until you click on it.

// Each time when the game starts, the game will change the values of each crystal.

});