var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var resetButton = document.getElementById("reset");
var playerOnedisplay = document.querySelector("#playerOnedisplay");
var playerTwodisplay = document.querySelector("#playerTwodisplay");
var playerOnescore = 0;
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

 playerOne.addEventListener("click", function() {
     if(!gameOver){
        playerOnescore++;
        if(playerOnescore === winningScore){
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

 playerTwo.addEventListener("click", function(){
     if(!gameOver){
         playerTwoscore++;
         if(playerTwoscore === winningScore){
             gameOver = true;
         }
         playerTwodisplay.textContent = playerTwoscore;

     }
     
});

resetButton.addEventListener("click", function(){
    playerOnescore = 0;
    playerTwoscore = 0;
    playerOnedisplay.textContent = 0;
    playerTwodisplay.textContent = 0;
    playerOnedisplay.classList.remove("winner");
    playerTwodisplay.classList.remove("winner");
    gameOver = false;
})
