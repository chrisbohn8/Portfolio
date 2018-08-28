$(document).ready(function() {
	//scroll animation
	$('.fa-arrow-circle-down').click(function() {
		$('html, body').animate({
      scrollTop: $('#projectsWrapper').offset().top
    }, 750);
	});
});
