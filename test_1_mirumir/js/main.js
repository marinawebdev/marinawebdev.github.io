$(document).ready(function(){
  $('.products_slider').slick({
  	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  asNavFor: '.products_slider_nav',
  });
  $('.products_slider_nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.products_slider',
	  arrows: true,
	  dots: false,
	  centerMode: false,
	  focusOnSelect: true,
	});
});