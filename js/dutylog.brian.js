$(document).ready(function() {	
	$(window).scroll(
	{
	}, 
	function () {
		var currentTop = $(window).scrollTop();
		var Bottom = $(window).height();
		var tolerance = -100;

		if (currentTop - Bottom >= tolerance) {
			$("#submit").removeAttr("disabled");
		}
		else if (currentTop - Bottom < tolerance) {
			$("#submit").attr("disabled","disabled");
		}
	});
	$("#submit").click(function() {
		bootbox.confirm("Are you sure?", function(result) {
			if(result==true) {
				window.location.href="homepage.html";
			}
        });
	});
	$("#print").click(function() {
		$("#formbody").printThis(

		);
	});
});