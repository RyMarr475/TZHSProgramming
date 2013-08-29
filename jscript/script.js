$(document).ready( function() {
	$('#accordion').accordion({collapsible: true, active: false, heightStyle: "content"});
	$('.acc').mouseenter( function() {
		$(this).css('cursor', 'pointer');
		$(this).css('background-color', '#00FF00');
	});
	$('.acc').mouseleave( function() {
		$(this).css('background-color', '#AEF986');
	});
	$('#dance').click( function() {
		$('#info').append("<audio autoplay='autoplay' loop='loop'><source src='dance.mp3' type='audio/mpeg'></audio>");
		setInterval(colorSwap, 450);
		$(this).remove();
	});	
});

function colorSwap() {
	$('body').css("background-color", "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");
	$('#page').css("background-color", "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");
	$('#nav').css("background-color", "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");
	$('.button').css("background-color", "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");
}