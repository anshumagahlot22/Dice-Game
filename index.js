var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceimg1='dice'+randomNumber1+'.png';
var randomImgsource1='images/'+randomDiceimg1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute('src',randomImgsource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceimg2='dice'+randomNumber2+'.png';
var randomImgsource2='images/'+randomDiceimg2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute('src',randomImgsource2);

if(randomNumber1>randomNumber2)
{
    var text=document.querySelector("h1");
    text.innerHTML ="🚩Player 1 Wins!!";
}
else if(randomNumber2>randomNumber1)
{
    var text=document.querySelector("h1");
    text.innerHTML="Player 2 Wins!!🚩";
}
else{
    var text=document.querySelector("h1");
    text.innerHTML="Draw!!";
}