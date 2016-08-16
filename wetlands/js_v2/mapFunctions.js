function determineClick(feature) {
	clickedCountyName = feature.properties.COUNTY_NAM;	
};


function updateSlider(x) {
	var valueHold = document.getElementById(x).value;
	map.setPitch(valueHold);
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
		
		map.setPaintProperty('coastalWaters', 'fill-opacity', 0);
		/*
		map.setPaintProperty('landcover_A1', 'fill-color', {
			property: 'Cov1',
			type: 'categorical',
			stops: [
				['A2', '#2DA0BA'],
				['A4', '#435645']]
			}
		);
		*/
	} else if (displayWaterControl > 0) {
		displayWaterControl = 0;
		document.getElementById(id).style.background = "#004878";
		document.getElementById(id).style.color = "#fff";
		
		map.setPaintProperty('coastalWaters', 'fill-opacity', 1);
		/*
		map.setPaintProperty('landcover_A1', 'fill-color', {
			property: 'Cov1',
			type: 'categorical',
			stops: [
				['A2', '#EE7600'],
				['A4', '#FB9B9C']]
			}
		);
		*/
	}
};



function takeScreenshot() {
	//window.open(window.location.href, '_blank');
	/*map.options.preserveDrawingBuffer = true;*/
	//var data = map.getCanvas().toDataURL("image/png");
	/*var canvas = map.getCanvas();
	var dataURL = canvas.toDataURL("image/png");
	*/
	//console.log(data);
	//window.location.href = data;
	window.open(data);
};