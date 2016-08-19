function determineClick(feature) {
	clickedCountyName = feature.properties.COUNTY_NAM;	
};

function displayLikeLegend(id) {
	document.getElementById(id).style.border = "2px solid white";
};

function resetLikeLegend(id) {
	document.getElementById(id).style.border = "1px solid #ddd";
};



var displayWaterControl = 0;
function displayWater(id) {
	if (displayWaterControl == 0) {
		displayWaterControl = 1;
		document.getElementById(id).style.background = "#fff";
		document.getElementById(id).style.color = "black";
		
	} else if (displayWaterControl > 0) {
		displayWaterControl = 0;
		document.getElementById(id).style.background = "#004878";
		document.getElementById(id).style.color = "#fff";
		
	}
};



function takeScreenshot() {
	//window.open(window.location.href, '_blank');
	var data1 = map.getCanvas().toDataURL("image/png");
	/*var canvas = map.getCanvas();
	var dataURL = canvas.toDataURL("image/png");
	*/
	//console.log(data);
	//window.location.href = data;
	window.open(data1);
};