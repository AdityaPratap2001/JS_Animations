const preLoader = document.querySelector('.preloader');
const dateSection = document.querySelector('.date');
let card1 = document.querySelector('.card_one');
let card2 = document.querySelector('.card_two');
let card3 = document.querySelector('.card_three');
let card4 = document.querySelector('.card_four');
let card5 = document.querySelector('.card_five');
let card6 = document.querySelector('.card_six');


// Responsible for preLoader
setTimeout(function(){
  preLoader.classList.add('vanish');
},4000)
setTimeout(function(){
  preLoader.style.display = 'none';
  document.querySelector('.hidden').classList.remove('hidden');
},5200)
let cloud1 = document.querySelector('.cloud-1');
let cloud2 = document.querySelector('.cloud-2');
let cloud3 = document.querySelector('.cloud-3');
let dragon = document.querySelector('.dragon');

var c_one_X = -2;
setInterval(function(){
  cloud1.style.right = c_one_X + 'px'; 
  c_one_X = c_one_X + 3;
  if(c_one_X >= screen.width + 150){
    c_one_X = -100;
  }
},15)

var c_two_X = -2;
setInterval(function(){
  cloud2.style.right = c_two_X + 'px'; 
  c_two_X = c_two_X + 3;
  if(c_two_X >= screen.width + 150){
    c_two_X = -100;
  }
},10)

var c_three_X = -2;
setInterval(function(){
  cloud3.style.right = c_three_X + 'px'; 
  c_three_X = c_three_X + 3;
  if(c_three_X >= screen.width + 150){
    c_three_X = -100;
  }
},18)

var xPos = -2;
setInterval(function(){
  dragon.style.left = xPos + 'px'; 
  xPos = xPos + 3;
  if(xPos >= screen.width+50){
    xPos = -100;
  }
},18)

var yPos = 250;
var moveUp = true;
var moveDown = false;
setInterval(function(){
  dragon.style.top =  yPos + 'px';
  if(moveUp){
    yPos = yPos - 1;
  }
  if(moveDown){
    yPos = yPos + 1;
  }

  if(yPos < 100){
    moveUp = false;
    moveDown = true;
  }
  if(yPos > 300){
    moveUp = true;
    moveDown = false;
  }
}, 6);

