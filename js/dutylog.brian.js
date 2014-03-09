$(document).ready(function() {	

	if ($("#recipient").val() == null || $("#recipient").val().length == 1) {
		$("#recTitle").html("Recipient:");
	} else {
		$("#recTitle").html("Recipients:");
	}

	if ($("#inputName").val() != "" && $("#area").val() != "" && $("#date").val() != "" && $("#firstround").val() != "" && $("#secondround").val() != "") {
		$("#submit").removeAttr("disabled");
	} else {
		$("#submit").attr("disabled","disabled");
	}

	$(".form-control").keypress(function() {
		$("#save").removeAttr("disabled");
		$("#save").html("Save for later");
	});

	$("#recipient").change(function() {
		if ($("#recipient").val() == null || $("#recipient").val().length == 1) {
			$("#recTitle").html("Recipient:");
		} else {
			$("#recTitle").html("Recipients:");
		}
	})

	$(".req").keypress(function() {
		if ($("#inputName").val() != "" && $("#area").val() != "" && $("#date").val() != "" && $("#firstround").val() != "" && $("#secondround").val() != "") {
			$("#submit").removeAttr("disabled");
		} else {
			$("#submit").attr("disabled","disabled");
		}
	})

	$(".req").change(function() {
		if ($("#inputName").val() != "" && $("#area").val() != "" && $("#date").val() != "" && $("#firstround").val() != "" && $("#secondround").val() != "") {
			$("#submit").removeAttr("disabled");
		} else {
			$("#submit").attr("disabled","disabled");
		}
	})

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