//random number generator
function playGame(){ 
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

//images variables
var image1 = "images/dice"+randomNumber1+".png"
var image2 = "images/dice"+randomNumber2+".png"

//DOM manipulation
document.querySelector(".dice .img1").setAttribute("src",image1);
document.querySelector(".dice .img2").setAttribute("src",image2);

//Finding the winner
if(image1>image2){
    document.querySelector("h1").innerHTML= "Player one has won!"
}
else if (image1<image2){
    document.querySelector("h1").innerHTML= "Player two has won!"
    document.querySelector("h1").style.fontSize = "7rem"

}
else if (image1=image2){

    document.querySelector("h1").style.fontSize = "6rem"
    document.querySelector("h1").innerHTML= "Its a TIE, refresh me again!"
}
}