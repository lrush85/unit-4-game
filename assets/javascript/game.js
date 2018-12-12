$(document).ready(function () {

//Set Variables


// The counters
var counter = 0;
var wins = 0;
var losses = 0;

// You will be given a random number at the start of the game.
// this version only allows numbers between 10 and 99 to display.
var randomNumber = Math.floor(Math.random() * ((99-10)+ 1) + 10);

$(".random-number").append(randomNumber);

// Random numbers generated for start of game for each jewel.
//Random number 1 - 4
var redJewel = Math.floor(Math.random() * 4) + 1;

//Random number 5 - 10
var blueJewel = Math.floor(Math.random() * ((10 - 5) + 1)+ 5);

//Random number 11 - 15
var yellowJewel = Math.floor(Math.random() * ((15 - 11) + 1)+ 11);

// Random number 16 - 20
var greenJewel = Math.floor(Math.random() * ((20 - 16) + 1)+ 16);

// There are four crystals below. By clicking on a crystal you will a specific amount of points to your total score.

// House all click functions in to a function
// function clickJewel() {

$(".red-jewel").on("click", function(){
    //Random number 1 - 5
    
    counter += redJewel;
    console.log(redJewel);
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
    //Random number 5 - 10
    counter +=blueJewel;
    console.log(blueJewel);
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
    //Random number 10 - 15
    
    counter += yellowJewel;
    console.log(yellowJewel);
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
    //Random number 15 - 20
    
    console.log(greenJewel);
    counter += greenJewel;
    
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
    randomNumber = Math.floor(Math.random() * ((99-10)+ 1) + 10);
    $(".random-number").append(randomNumber);

    //Random number 1 - 4
    redJewel = Math.floor(Math.random() * 4) + 1;

    //Random number 5 - 10
    blueJewel = Math.floor(Math.random() * ((10 - 5) + 1)+ 5);

    //Random number 11 - 15
    yellowJewel = Math.floor(Math.random() * ((15 - 11) + 1)+ 11);

    // Random number 16 - 20
    greenJewel = Math.floor(Math.random() * ((20 - 16) + 1)+ 16);
}

// You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.

// The value of each crystal is hidden from you until you click on it.

// Each time when the game starts, the game will change the values of each crystal.

});