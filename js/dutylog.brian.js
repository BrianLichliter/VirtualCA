$(document).ready(function() {
	$(window).scroll(
	{
	}, 
	function () {
		var currentTop = $(window).scrollTop();
		var Bottom = $(window).height();

		if (currentTop - Bottom == 0) {
			$("#submit").fadeIn();
		}
		else if (currentTop - Bottom < 0) {
			$("#submit").fadeOut();
		}
	});
});