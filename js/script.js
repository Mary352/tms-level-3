$(document).ready(function(){
   if ($(window).width() <= '768'){
      $('.reviews__slider').slick({
         arrows: false,
         dots: true, 
         // autoplay:true
         touchThreshold:15,
         touchMove: false, 
         centerMode:true
      });
   }
})
