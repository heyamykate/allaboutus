$('.answers').hide();

$('.questions').on('click', function() {
	var answer = $('.answers');
	$(this).next(answer).slideToggle();
})