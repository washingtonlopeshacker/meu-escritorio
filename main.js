let menu = document.querySelector('.menu-box');
 document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    search.classList.remove('active');
   
};

let search = document.querySelector('.search-box');
 document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    menu.classList.remove('active');

 };

 let cart = document.querySelector('.cart');
 document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    menu.classList.remove('active');

 };
 
 let user = document.querySelector('.user');
 document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    menu.classList.remove('active');
    
};

let header = document.querySelector("header");
addEventListener('scroll', ()=> {
   header.classList.toggle('shadew', window.scrolly> 0);
});

var swiper = new Swiper(".new-arrival", {
   spaceBetween: 20,
   loop:true,
   autoplay: {
     delay: 1500,
     disableOnInteraction: false,
   },
   centeredSlides: true,

   breakpoints: {
   0: {slidesPerView: 0},
   568: {slidesPerView: 2,},
   768: {lidesPerView: 2,},
   1020: {slidesPerView: 3,},

   pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
  }});

  




