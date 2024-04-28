var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage="dice" + randomNumber1 + ".png";
var randomDiceSource="images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2="dice" + randomNumber2 + ".png";
var randomDiceSource2="images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="&#128681 Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins &#128681";
}
else{
    document.querySelector("h1").innerHTML="&#128681 Draw &#128681";
}