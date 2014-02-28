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

	$(".form-control").keypress(function() {
		$("#save").removeAttr("disabled");
		$("#save").html("Save for later");
	});

	$("select").change(function() {
		$("#save").removeAttr("disabled");
		$("#save").html("Save for later");
	});

	$("#save").click(function() {
		$("#save").attr("disabled","disabled");
		$("#save").html("Saved");
	});

	$("#submit").click(function() {
		bootbox.confirm("Are you sure?", function(result) {
			if(result==true) {
				window.location.href="homepage.html";
			}
        });
	});

	$("#print").click(function() {
		window.print();
	});
});