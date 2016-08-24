function determineClick(feature) {
	clickedCountyName = feature.properties.COUNTY_NAM;	
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