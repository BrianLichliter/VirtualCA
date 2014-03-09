$(document).ready(function() {
	$('#formselection').click(function() {
		var form = $( "#formselect" ).val();
		if (form == "duty") {
			window.location.href = "dutylog.brian.html";
		}
	});

	$('#draftselection').click(function() {
		var form = $( "#draftselect" ).val();
		if (form == "duty_draft") {
			window.location.href = "DutyLog_draft.html";
		}
	});

	$('select#formselect > option').dblclick(function() {
		console.log(this);
		if ($(this).val() == "duty") {
			window.location.href = "dutylog.brian.html";
		}
	});

	$('select#draftselect > option').dblclick(function() {
		window.location.href = "DutyLog_draft.html";
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

	$("#logout").click(function() {
		window.location.href = "index.html";
	});

	$("#setting").click(function() {
		window.location.href = "Settings.html";
	});
	
	});
