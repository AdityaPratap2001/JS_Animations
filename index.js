const preLoader = document.querySelector('.preloader');
const dateSection = document.querySelector('.date');

// Responsible for preLoader
setTimeout(function(){
  preLoader.classList.add('vanish');
},2300)

// RESPONSIBLE FOR DISPLAYING DATE
let date = new Date();
const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
dateSection.innerText = date.toLocaleDateString(undefined,options);
