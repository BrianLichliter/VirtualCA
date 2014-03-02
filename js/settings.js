$(document).ready(function() {	
	$("#save").click(function() {
		bootbox.confirm("Are you sure?", function(result) {
			if(result==true) {
				window.location.href="homepage.html";
			}
        });
	});
});