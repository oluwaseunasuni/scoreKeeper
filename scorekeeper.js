var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var playerOnedisplay = document.querySelector("#playerOnedisplay");
var playerOnescore = 0;
var playerTwodisplay = document.querySelector("#playerTwodisplay");
var playerTwoscore = 0;
var gameOver = false;
var winningScore = 5;

playerOne.addEventListener("click", function() {
    if(!gameOver){
       playerOnescore++;
        if(playerOnescore === winningScore){
            playerOnedisplay.classList.add("winner");
            gameOver = true;
        }
       playerOnedisplay.textContent = playerOnescore;  
    }
});

playerTwo.addEventListener("click", function(){
    if(!gameOver){
        playerTwoscore++;
        if(playerTwoscore === winningScore){
            playerTwodisplay.classList.add("winner");
            gameOver = true;
        }
        playerTwodisplay.textContent = playerTwoscore;
    }
    
});