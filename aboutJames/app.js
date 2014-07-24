$(document).ready(function() {

	$('#homieslist').hide();

	$('#homies').on('click', function(){
		$('#homieslist').slideToggle();
	})

	$('.answers').hide();

	$('.questions').on('click', function() {
		var answer = $('.answers');
		$(this).next(answer).slideToggle();
	})

})