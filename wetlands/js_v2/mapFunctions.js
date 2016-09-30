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

















function changeLegendAndMapWetlands(){
	map.setPaintProperty('Wetlands', 'fill-color', {
		property: 'Cov1',
		type: 'categorical',
		stops: [
			['A3', '#fbb03b'],
			['A4', '#223b53'],
			['B4', '#e55e5e'],
			['C4', '#3bb2d0'],
			['C4b', '#ccc']]
	});
				
	var c;
	for(c=0; c < mainLegend.length; c++){
		var placeholder = mainLegend[c][0];
		var remove = document.getElementById(placeholder);
					
		var p1 = document.getElementById("legendv2").lastElementChild;
		var p2 = p1.childNodes[0];
		var p3 = p2.childNodes[0];
		p2.removeChild(p3);
	}
				
	var backHolder = document.createElement('DIV');
	var textBackHolder = document.createTextNode("Back");
	backHolder.setAttribute("class", "legendSquarev2");
	backHolder.setAttribute("onclick", "clickLegendBack('Wetlands')");
	var m1 = document.getElementById("legendv2").lastElementChild;
	var m2 = m1.childNodes[0];
	backHolder.appendChild(textBackHolder);
	m2.appendChild(backHolder);
				
	var v;
	for(v=0; v < wetlandsLayers.length; v++){
		var placeholder = document.createElement('DIV');
		var placeholder2 = document.createElement('DIV');
		var idHold = wetlandsLayers[v][0];
		var colorHold = "background:" + wetlandsLayers[v][1];
		var textholder = document.createTextNode(idHold);
					
					
		placeholder.setAttribute("class", "legendSquare");
		placeholder2.setAttribute("class", "circleLegend");
		placeholder2.setAttribute("id", idHold);
		placeholder2.setAttribute("style", colorHold);
					
		var placeholder3 = document.getElementById("legendv2").lastElementChild;
		var placeholder4 = placeholder3.childNodes[0];
		placeholder4.appendChild(placeholder);
		placeholder.appendChild(placeholder2);
		placeholder2.appendChild(textholder);
	}
};


function changeLegendAndMapAgriculture(){
	map.setPaintProperty('Agriculture', 'fill-color', {
		property: 'Cov1',
		type: 'categorical',
		stops: [
			['AP', '#D98880'],
			['BB', '#C39BD3'],
			['C', '#7FB3D5'],
			['CS', '#5DADE2'],
			['F4', '#76D7C4'],
			['FP', '#7DCEA0'],
			['P', '#F1C40F'],
			['PP', '#FDEBD0'],
			['SP', '#873600'],
			['OR', '#D6DBDF']]
	});
				
	var c;
	for(c=0; c < mainLegend.length; c++){
		var placeholder = mainLegend[c][0];
		var remove = document.getElementById(placeholder);
					
		var p1 = document.getElementById("legendv2").lastElementChild;
		var p2 = p1.childNodes[0];
		var p3 = p2.childNodes[0];
		p2.removeChild(p3);
	}
				
	var backHolder = document.createElement('DIV');
	var textBackHolder = document.createTextNode("Back");
	backHolder.setAttribute("class", "legendSquarev2");
	backHolder.setAttribute("onclick", "clickLegendBack('Agriculture')");
	var m1 = document.getElementById("legendv2").lastElementChild;
	var m2 = m1.childNodes[0];
	backHolder.appendChild(textBackHolder);
	m2.appendChild(backHolder);
				
	var v;
	for(v=0; v < agricultureLayers.length; v++){
		var placeholder = document.createElement('DIV');
		var placeholder2 = document.createElement('DIV');
		var idHold = agricultureLayers[v][0];
		var colorHold = "background:" + agricultureLayers[v][1];
		var textholder = document.createTextNode(idHold);
					
					
		placeholder.setAttribute("class", "legendSquare");
		placeholder2.setAttribute("class", "circleLegend");
		placeholder2.setAttribute("id", idHold);
		placeholder2.setAttribute("style", colorHold);
					
		var placeholder3 = document.getElementById("legendv2").lastElementChild;
		var placeholder4 = placeholder3.childNodes[0];
		placeholder4.appendChild(placeholder);
		placeholder.appendChild(placeholder2);
		placeholder2.appendChild(textholder);
	}
};