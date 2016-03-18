$('header h1').click(function(event) {
	$(this).css('transform', 'translate(-50%,-50%) scale(1.5,1.5)');
	$('header ul li').css('animation-duration', '.5s');
	cover.fadeTo(1000, 1, function() {
		$('header').hide();
		nav.show();
		$('.works').siblings('div').show();
		cover.stop(true).fadeTo(1000, 0);
	});
});

nav_01.children('a').click(function(event) {
	$('.works').stop(true).fadeOut(1000).siblings('div').delay(1000).stop(true).fadeIn(1000);
	my_html.css('overflow', 'hidden');
});

nav_02.children('a').click(function(event) {
	$('.works').delay(1000).stop(true).fadeIn(1000).siblings('div').stop(true).fadeOut(1000);
	my_html.css('overflow', 'auto');
});