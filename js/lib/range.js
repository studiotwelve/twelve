$("input[type=range]").after("<div class='range'></div>").hide();	
	$(".range").each(function(e){
	var rMin = parseFloat($(this).siblings("input[type=range]").attr("min"));
	var rMax = parseFloat($(this).siblings("input[type=range]").attr("max"));
	var rVal = parseFloat(rMax-rMin)/2;
	var rStep = parseFloat($(this).siblings("input[type=range]").attr("step"));
	
	$(this).slider({
		min: rMin, max: rMax, value: rVal, step: rStep,
		change: function(event, ui) {
			$(this).siblings("input[type=range]").attr("value", $(this).slider("option", "value"));
			$(this).siblings("output").attr("value", $(this).slider("option", "value"));
		}
	});
});