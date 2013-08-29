$(document).ready( function() {
	$('#accordion').accordion({collapsible: true, active: false, heightStyle: "content"});
	$('.acc').mouseenter( function() {
		$(this).css('cursor', 'pointer');
		$(this).css('background-color', '#00FF00');
	});
	$('.acc').mouseleave( function() {
		$(this).css('background-color', '#AEF986');
	});
});