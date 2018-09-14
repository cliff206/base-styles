/*!
Custom JS


 */


$( document ).ready(function() {
	//makes carousels not wrap
	$('.carousel').carousel({
	  wrap: false
	});
	//checks fist slide in carosuel not have left arrow
	if ($('.carousel-inner .item.step1').hasClass('active')) {
		// Hide left arrow
		$('.left.carousel-control').hide();		        	            
	}
	


}); //closes document.ready
	
	//hides left and right arrows at end of carousel, update classes to match html
	$('.carousel').on('slid.bs.carousel',checkitem);

	function checkitem(){
	var $carousel = $(this).find('.carousel-inner .item');
		if($carousel.is('.step1.active')){ // is first slide
			$(this).find('.carousel-control.right').show();
			$(this).find('.carousel-control.left').hide();
		
		}else if($carousel.is(".step3.active")){ // is last slide
			$(this).find('.carousel-control.left').show();
			$(this).find('.carousel-control.right').hide();
			
		}else{ // is not first or last slide
			$(this).find('.carousel-control').show();
			
		}
	}
	//ends hide left and right arrows

	