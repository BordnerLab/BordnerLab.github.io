mapboxgl.accessToken = 'pk.eyJ1IjoiYm9yZG5lcndsZWkiLCJhIjoiY2lyZjd1a2tyMDA3dmc2bmtkcjUzaG5meCJ9.eswxCZSAnob59HR0wEaTpA';
	
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/bordnerwlei/cirf7wsrr0003g8nlogxrqxyr',
	center: [-88.0198, 44.5192],
	zoom: 9,
	preserveDrawingBuffer: false,
	hash: false,
	pitch: 0.1
});

var draw = mapboxgl.Draw({
	drawing: true,
	displayControlsDefault: false,
	controls: {
		polygon: true,
		trash: true
	}
});

map.addControl(draw);

var calcButton = document.getElementById('calculate');
calcButton.onclick = function() {
	alert('woohoo!');
	var data = draw.getAll();
	
	var features = map.queryRenderedFeatures(data, { layers: hoverLayers});
	
	console.log(features);
	console.log(features[0]);
	/*
	var data = draw.getAll();
	if (data.feature.length > 0) {
		var area = turf.area(data);
		var rounded_area = Math.round(area*100)/100;
		var answer = document.getElementById('calculated-area');
		answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
	} else {
		alert('Use the draw tools to draw a polygon!');
	}
	*/
};


/*
map.addControl(new mapboxgl.Navigation());
*/

/*
var geocoder = new mapboxgl.Geocoder({
	container: 'geocoder-container'
});
*/

/*
map.addControl(geocoder);
*/
	
map.on('load', function () {
	addMapSources();
		
	addCountyInitial();
	
	
	
		
	var popup = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});
	
	map.on('mousemove', function(e) {
		var features = map.queryRenderedFeatures(e.point, { layers: hoverLayers });
			
		if (features.length && features[0].layer.id == "county-fills") {
			console.log(features[0].layer.id);
		} else if (features.length && features[0].layer.id != "county-fills") {
			var holdID = features[0].layer.id; // ???
		} else {

		}
			
		map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
			
		if (!features.length) {
			popup.remove();
			return;
		}
		
		var feature = features[0];
			
		if (feature.layer.id == "county-fills") {
			popup.setLngLat(e.lngLat)
				.setHTML(feature.properties.COUNTY_NAM)
				.addTo(map);
		} else if (feature.layer.id != "county-fills" && feature.layer.type != "symbol") {
			findLongCoverName(feature);
			var textInPopUp = feature.properties.Cov1 + ": " + hoveredCountyLandcover + "<br>" + "Min Diam: " + feature.properties.MinDiam1 +
			"<br>" + "Max Diam: " + feature.properties.MaxDiam1 + "<br>" + "Density: " + feature.properties.Den1;
			popup.setLngLat(e.lngLat)
				.setHTML(textInPopUp)
				.addTo(map);
		} else if (feature.layer.type == "symbol") {
			findLongPointName(feature);
			popup.setLngLat(e.lngLat)
				.setHTML(feature.properties.Point_Type + ": " + hoveredCountyPoint)
				.addTo(map);
		}
	});
		
	map.on ('mouseout', function() {
			
	});
		
	map.on ('click', function(e) {
		var features = map.queryRenderedFeatures(e.point, { layers: hoverLayers });
		
		var feature = features[0];
		
		if (features.length && feature.layer.id == "county-fills") {
			map.flyTo({
				center: e.lngLat,
				zoom: 8
			});
			
			document.getElementById("currentCountyBox").innerHTML = feature.properties.COUNTY_NAM + " Hello!";
					
			determineClick(feature);
		} else if (features.length && feature.layer.id != "county-fills") {
			var randomPitch = Math.floor((Math.random() * 40) + 30);
			if (threeDControl == true) {
				map.flyTo({
					center: e.lngLat,
					zoom: 13,
					pitch: randomPitch,
					around: e.lngLat,
					animate: true
				});
				/*document.getElementById("pitch").value = 35;*/
			} else if (threeDControl == false) {
				map.flyTo({
					center: e.lngLat,
					zoom: 13,
					around: e.lngLat,
					animate: true
				});
			}
		} else {
			
		}
					
	});
	/*
	map.on ('render', function() {
		if (getCanvasControl == true) {
			data = map.getCanvas().toDataURL("image/png");
			return data;
		} else {
			return;
		}
	});
	*/
});
	
/*
geocoder.on('result', function(ev) {
	map.getSource('single-point').setData(ev.result.geometry);
});
*/

function findLongCoverName(source) {
	var b;
	for (b=0; b < combinationLayers.length; b++) {
		if (source.properties.Cov1 == combinationLayers[b][0]) {
			hoveredCountyLandcover = combinationLayers[b][2];
		}
	}
	return hoveredCountyLandcover;
};

function findLongPointName(source) {
	var b;
	for (b=0; b < pointLayers.length; b++) {
		if (source.properties.Point_Type == pointLayers[b][0]) {
			hoveredCountyPoint = pointLayers[b][1];
		}
	}
	return hoveredCountyPoint;
};