// "use strict"
// const toggleNavBtn = document.querySelector('.toggle');
// const mainNav = document.querySelector('.nav-links');
// const toggleIcon = document.querySelector('.fa-bars');

// toggleNavBtn.addEventListener('click', ()=>{
// console.log(mainNav);
// mainNav.classList.toggle('transformer');
// console.log(toggleIcon);
// toggleIcon.classList.toggle('fa-x')



// });


"use strict"
const toggleNavBtn = document.querySelector('.toggle');
const mainNav = document.querySelector('.nav-links');
const toggleIcon = document.querySelector('.fa-bars');
const nav = document.querySelector('nav');



toggleNavBtn.addEventListener("click",()=>{

  if(toggleIcon.classList.contains("fa-bars")){
    mainNav.classList.toggle('transformer');
    toggleIcon.classList.remove("fa-bars")
    toggleIcon.classList.add("fa-x")
  }else{
    !mainNav.classList.toggle('transformer');
    toggleIcon.classList.add("fa-bars")
    toggleIcon.classList.remove("fa-x")
  }
nav.classList.toggle('black');
});

