$(window).on('load', function() {
	$(".loader").delay(400).fadeOut("slow");
});

$(document).ready(function () {
	$("#down").on("click", function(event) {
		event.preventDefault();
		var id 	= $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1200);
	});

	$('.toggle_menu').on('click', function(event) {
		event.preventDefault();
		$('.menu_line').toggleClass('open_menu')
	});

	$('.close_menu, #main_menu>li>a').on('click', function(event) {
		event.preventDefault();
		$('.menu_line').removeClass('open_menu');
	});

	$("#main_menu>li>a").on("click", function(event) {
		event.preventDefault();
		var id 	= $(this).attr('href'),
			top = $(id).offset().top - 46;
		$('body,html').animate({scrollTop: top}, 1200);
	});


	$("#main_menu li").on("click", function() {
		$("#main_menu li").removeClass()
		$(this).addClass("active")
	});

	$(window).scroll(function() {
	    var windscroll = $(window).scrollTop()
	    if (windscroll >= 100) {
	        $('section').each(function(i) {
	            if ($(this).position().top <= windscroll + 56) {
	                $('#main_menu li.active').removeClass('active');
	                $('#main_menu li').eq(i).addClass('active');
	            }
	        });
	    } else {
	        $('#main_menu li.active').removeClass('active');
	        $('#main_menu li:first').addClass('active');
	    }

	}).scroll();

	$('.owl-carousel').owlCarousel({
	    loop:false,
	    margin:30,
	    dots:false,
	    nav:true,
	    navText:["<img src='../img/arrow-left.png'>", "<img src='../img/arrow-right.png'>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        670:{
	            items:2
	        },
	        1020:{
	            items:3
	        }
	    }
	});
});

