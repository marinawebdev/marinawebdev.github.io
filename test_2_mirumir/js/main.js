$(document).ready(function(){
	$('.last_row + ~ *').hide();
    $('.show').click(function() {
    	$('.show').toggle();
    	$('.hide').css('display', 'block');
    	$('.last_row + ~ *').show();
    	$('.close_btn').removeClass('box_shadow');
    });
    $('.hide').click(function() {
    	$('.hide').toggle();
    	$('.show').css('display', 'block');
    	$('.last_row + ~ *').hide();
    	$('.close_btn').addClass('box_shadow');
    });

    if ( $('.category').length <= 1 ) {
    	$('.close_btn').css('display', 'none');
    };
});