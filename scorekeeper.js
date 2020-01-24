 var playerOne = document.querySelector("#playerOne");
 var playerTwo = document.querySelector("#playerTwo");
 var h1 = document.querySelector("h1");
 var playerOnescore = 0;
 var playerTwoscore = 0;

 playerOne.addEventListener("click", function() {
     playerOnescore++;
     console.log(playerOnescore);
     h1.textContent = playerOnescore;
 });

 playerTwo.addEventListener("click", function(){
     playerTwoscore++;
     console.log(playerTwoscore);
     h1.textContent = playerTwoscore;
 });