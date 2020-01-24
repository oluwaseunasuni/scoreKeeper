 var playerOne = document.querySelector("#playerOne");
 var playerTwo = document.querySelector("#playerTwo");
 var playerOnedisplay = document.querySelector("#playerOnedisplay");
 var playerOnescore = 0;
 var playerTwodisplay = document.querySelector("#playerTwodisplay");
 var playerTwoscore = 0;

 playerOne.addEventListener("click", function() {
     playerOnescore++;
     playerOnedisplay.textContent = playerOnescore;
 });

 playerTwo.addEventListener("click", function(){
     playerTwoscore++;
     playerTwodisplay.textContent = playerTwoscore;
 });