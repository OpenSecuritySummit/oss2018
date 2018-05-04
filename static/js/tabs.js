$(document).ready(function() {
	if($(window).width() > 960){
	var leftHeight = $('.aside_bx').height();
	$('.aside_bx').attr('data-height', leftHeight);

	$('a[data-toggle=tab]').click(function(){
		var elemId = $(this).attr('href');
		var rightHeight = $(elemId).height();
		if((rightHeight > leftHeight)){
			$('.aside_bx').height(rightHeight+20);
		} else {
			$('.aside_bx').height($('.aside_bx').attr('data-height'));
		}
	});
	}

    $('#myCarousel').carousel({
	interval: 3000
	})

    $('#myCarousel,#myCarousel2').on('slid.bs.carousel', function() {
    	//alert("slid");
	});

});
