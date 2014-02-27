$(document).ready(function() {
	$('#formselection').click(function() {
		var form = $( "#formselect" ).val();
		if (form == "duty") {
			window.location.href = "dutylog.brian.html";
		}
	});

	$(window).scroll(
	{
	}, 
	function () {
		var currentTop = $(window).scrollTop();
		if (currentTop < 50) {
			$("#fixed").fadeIn();
		}
		else if (currentTop > 50) {
			$("#fixed").fadeOut();
		}
	});
});