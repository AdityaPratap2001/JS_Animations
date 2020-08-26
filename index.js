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

// RESPONSIBLE FOR POPUP
let btn = document.querySelector('.holiday_btn');
let popup = document.querySelector('.popup_container')
let close = document.querySelector('.close');
btn.addEventListener('click',function(){
  console.log('button clicked!');
  document.documentElement.scrollTop = 0;
  popup.style.display = 'flex';
})
close.addEventListener('click',function(){
  popup.style.display = 'none';
})

// RESPONSIBLE FOR DISPLAYING DATE
let date = new Date();
const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
dateSection.innerText = date.toLocaleDateString(undefined,options);

let anim_loaded1 = false;
let anim_loaded2 = false;
let anim_loaded3 = false;

// This function runs when user scrolls and 
// the width of device is more than 610px 
function scrollDisappear(){

  let card_top1 = card1.getBoundingClientRect().top;
  let card_top2 = card3.getBoundingClientRect().top;
  let card_top3 = card5.getBoundingClientRect().top;

  // FOR CARD 1 & 2
  if(card_top1 < 90){
    card1.classList.add('card_anim');
    card2.classList.add('card_anim2');
    anim_loaded1 = true;
  }
  else if(card_top1 >= 90){
    card1.classList.remove('card_anim');
    card2.classList.remove('card_anim2');
    anim_loaded1 = false;
  }

  // FOR CARD 3 & 4
  if(card_top2 < 90){
    card3.classList.add('card_anim');
    card4.classList.add('card_anim2');
    anim_loaded2 = true;
  }
  else if(card_top2 >= 90){
    card3.classList.remove('card_anim');
    card4.classList.remove('card_anim2');
    anim_loaded2 = false;
  }
  
  // FOR CARD 5 & 6
  if(card_top3 < 90){
    card5.classList.add('card_anim');
    card6.classList.add('card_anim2');
    anim_loaded3 = true;
  }
  else if(card_top3 >= 90){
    card5.classList.remove('card_anim');
    card6.classList.remove('card_anim2');
    anim_loaded3 = false;
  }
}

// This will execute when user scrolls and screen size is <= 610px
// when cards are aligned vertically 

let cardone_anim = false;
function scrollDisappear2(){

  let cardOneHeight = card1.getBoundingClientRect().top;
  let cardTwoHeight = card2.getBoundingClientRect().top;
  let cardThreeHeight = card3.getBoundingClientRect().top;
  let cardFourHeight = card4.getBoundingClientRect().top;
  let cardFiveHeight = card5.getBoundingClientRect().top;
  let cardSixHeight = card6.getBoundingClientRect().top;

  if(cardOneHeight < 90 && !cardone_anim){
    card1.classList.add('card_anim');
    cardone_anim = true;
  }
  else if(window.scrollY<=12){
    card1.classList.remove('card_anim');
    cardone_anim = false;
  }
  else if(cardOneHeight >= 90 ){
    card1.classList.remove('card_anim');
    cardone_anim = false;
  }
  if(cardTwoHeight < 90){
    card2.classList.add('card_anim');
  }
  else if(cardTwoHeight >= 90 ){
    card2.classList.remove('card_anim');
  }
  if(cardThreeHeight < 90){
    card3.classList.add('card_anim');
  }
  else if(cardThreeHeight >= 90 ){
    card3.classList.remove('card_anim');
  }
  if(cardFourHeight < 90){
    card4.classList.add('card_anim');
  }
  else if(cardFourHeight >= 90 ){
    card4.classList.remove('card_anim');
  }
  if(cardFiveHeight < 90){
    card5.classList.add('card_anim');
  }
  else if(cardFiveHeight >= 90 ){
    card5.classList.remove('card_anim');
  }
  if(cardSixHeight < 90){
    card6.classList.add('card_anim');
  }
  else if(cardSixHeight >= 90 ){
    card6.classList.remove('card_anim');
  }

}

if(screen.width <= 610){
  window.addEventListener('scroll',scrollDisappear2);
}
else{
  window.addEventListener('scroll',scrollDisappear);
}
