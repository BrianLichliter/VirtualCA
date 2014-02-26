$(document).ready(function() {
	$('#formselection').click(function() {
    	var form = $( "#formselect" ).val();
    	if (form == "duty") {
    		window.location.href = "DutyLog.html";
    	}
	});
});