// swipe-slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay: 4000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
  });