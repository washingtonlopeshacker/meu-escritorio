let menu = document.querySelector('.menu-box');
document.querySelector('#menu-icon').onclick = () =>{
   menu.classList.toggle('active');
   cart.classList.remove('active');
   user.classList.remove('active');
   search.classList.remove('active');
};

let closed = document.querySelector('.menu-box');
document.querySelector('#closed-icon').onclick = () =>{
   menu.classList.toggle('active');
   closed.classList.remove('active');
   
};

let header = document.querySelector("header");
addEventListener('scroll', ()=> {
   header.classList.toggle('shadew', window.scrolly> 0);
});

var swiper = new Swiper(".new-arrival",  {
   spaceBetween: 30,
   loop:true,
   autoplay: {
   delay: 3500,
   disableOnInteraction: false,
},
   centeredSlides: true,
   breakpoints: {
   0: {slidesPerView: 1,},
   568: {slidesPerView: 2,},
   768: {lidesPerView: 1,},
   1020: {slidesPerView: 3,},

   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },

   
}});










