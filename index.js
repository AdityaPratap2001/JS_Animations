const preLoader = document.querySelector('.preloader');
const dateSection = document.querySelector('.date');
let card1 = document.querySelector('.card_one');
let card2 = document.querySelector('.card_two');
let card3 = document.querySelector('.card_three');
let card4 = document.querySelector('.card_four');
let card5 = document.querySelector('.card_five');
let card6 = document.querySelector('.card_six');

console.log(screen.width);

// Responsible for preLoader
setTimeout(function(){
  preLoader.classList.add('vanish');
},3000)

