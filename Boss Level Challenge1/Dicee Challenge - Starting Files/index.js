var img1=Math.floor(Math.random() * 6)+1;
var random="dice"+ img1 + ".png";
var randomImg="./images/"+random;
document.querySelectorAll("img")[0].setAttribute("src", randomImg);


var img2=Math.floor(Math.random() * 6)+1;
var random2="dice"+ img2 + ".png";
var randomImg2="./images/"+random2;
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);


if (img1>img2){
    document.querySelector("h1").innerHTML="Player1 won!";
}
else if (img1===img1){
    document.querySelector("h1").innerHTML="Equal!";
}

else{
    document.querySelector("h1").innerHTML="Player2 won!";
}