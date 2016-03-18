nav_01.children('a').click(function(event) {
	location.href="../html/index.html";
});

nav_02.children('a').click(function(event) {
	location.href="../html/index.html";
});


	$('.type em').click(function(event) {
		var i = $(this).index() + 1;
		var type_className = '.type_' + i;
		$('.list li').hide();
		$(type_className).parents('li').show();
	});