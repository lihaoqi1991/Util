var cover = $('.cover');
var nav = $('nav');
var my_window = $(window);
var my_html = $('html');
var nav_text = $('nav ul li');
var nav_01 = nav_text.eq(0);
var nav_02 = nav_text.eq(1);
var nav_03 = nav_text.eq(2);
var nav_04 = nav_text.eq(3);

nav.children('h1').click(function(event) {
	cover.fadeTo(1000, 1, function() {
		location.href = "../html/index.html";
	});
});

nav_text.children('a').click(function(event) {
	$(this).addClass('current').parent('li').siblings().children('a').removeClass('current');
});

nav_03.children('a').click(function(event) {
	location.href = "../html/list.html";
});

nav_04.children('a').click(function(event) {
	location.href = "../html/article.html";
});

var to_top = $('.to_top');
my_window.scroll(function(event) {
	var window_height = my_window.height();
	var scroll_height = my_window.scrollTop();

	if (window_height < scroll_height) {
		to_top.stop(true).fadeTo(500,1);
	};
	if(scroll_height < window_height){
		to_top.stop(true).fadeTo(500,0);
	}
});

to_top.click(function(event) {
	$('html,body').stop().animate({'scrollTop':0}, 500);
});