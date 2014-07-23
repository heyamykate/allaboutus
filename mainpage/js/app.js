$(document).ready(function() {
$("#slide-menu").hide();

$('.menu-trigger').on('click', function() {
	console.log("works");
	$("#slide-menu").slideToggle();
})

});