var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimages="dice"+randomNumber1+".png";
var randomimagesource="images/"+randomimages;

document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimages2="dice"+randomNumber2+".png";
var randomimagesource2="images/"+randomimages2;

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=" Player 1 Wins. 🚩🚩"
  document.querySelector("h1").style.color="#0F3460"
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML=" 🚩🚩 Player 2 Wins. "
    document.querySelector("h1").style.color="#0F3460"
}
else{
  document.querySelector("h1").innerHTML="🚩 Nobody Wins. 🚩"
    document.querySelector("h1").style.color="#4C0033"
}
