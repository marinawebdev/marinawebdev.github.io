

$(document).ready(function(){
	$('.carousel_1').owlCarousel({
	    margin:30,
	    loop:true,
	    autoWidth:true,
	    items:4
	});

	$('.carousel_2').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    navText: ["<", ">"],
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        },
	        1200:{
	            items:4
	        }
	    }
	});

	$('.carousel_3').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    navText: ["<", ">"],
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$('.carousel_4').owlCarousel({
	    loop:true,
	    nav:true,
	    navText: ["<", ">"],
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
});

