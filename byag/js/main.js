$(window).on('load', function() {
	$('#preload').delay(2500).addClass('slide_up');
	$('#preload_bg').delay(3500).fadeOut('slow');
	setTimeout( function() {
		$('body, html').css('overflow','visible');
	}, 3800)
});

$(document).ready(function() {
  	$('.owl-carousel').owlCarousel({
	    loop:true,
	    nav:true,
	    margin:1,
	    navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
	    items:1,
	});
 })	



