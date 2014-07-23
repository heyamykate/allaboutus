$('#nav').hide();
$('.answers').hide();

$('#menu-trigger').on('click', function(){
	$('#nav').slideToggle();
})

$('.questions').on('click', function() {
	var answer = $('.answers');
	$(this).next(answer).slideToggle();
})