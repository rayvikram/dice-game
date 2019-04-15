var random1 = Math.floor( Math.random()*6 +1);
var image1 = "images/dice" + random1 +".png";
document.querySelector(".img1").setAttribute("src", image1);

var random2 = Math.floor( Math.random()*6 +1);
var image2 = "images/dice" + random2 +".png";
document.querySelector(".img2").setAttribute("src", image2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "🏆Player 1 won";
}else if (random1 < random2) {
  document.querySelector("h1").innerHTML = "Player 2 won🏆";
}else
document.querySelector("h1").innerHTML = "Draw !";
