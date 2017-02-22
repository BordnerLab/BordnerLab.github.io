
var geoC = (function() {
	var text1;
	var text2;
	var text3;
	var text4;
	var text5;
	var loadText;
			
	mapboxgl.accessToken = 'pk.eyJ1IjoiYm9yZG5lcndsZWkiLCJhIjoiY2lyZjd1a2tyMDA3dmc2bmtkcjUzaG5meCJ9.eswxCZSAnob59HR0wEaTpA';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/bordnerwlei/cizepw2le005h2so39v1oa0i1',
		center: [-89.4012, 43.0731],
		zoom: 13
	});
			
	// create geocoder
	var geocoder = new MapboxGeocoder({
		accessToken: mapboxgl.accessToken
	});
	// call function addGeocoder
	addGeocoder();
	// function which adds the geocoder to the map
	function addGeocoder() {
		map.addControl(geocoder);
				
		$('.mapboxgl-ctrl-geocoder').detach().appendTo('#myContainer');
		
		$('.mapboxgl-ctrl-geocoder').attr("id", "myGeocoder");
		var myGeocoder = document.getElementById("myGeocoder");
		myGeocoder.style.width = "100%";
		myGeocoder.style.left = "0";
		myGeocoder.style.right = "0";
		myGeocoder.style.margin = "0 auto";
				
		loadText = document.createElement("h3");
		text1 = document.createElement("h3");
		text2 = document.createElement("h3");
		text3 = document.createElement("h3");
		text4 = document.createElement("h3");
		text5 = document.createElement("h3");
		var myLine = document.createElement("hr");
		
		loadText.setAttribute("id", "loadText");
		text1.setAttribute("id", "text1");
		text2.setAttribute("id", "text2");
		text3.setAttribute("id", "text3");
		text4.setAttribute("id", "text4");
		text5.setAttribute("id", "text5");
				
		$(loadText).appendTo("#myContainer");
		$(myLine).appendTo("#myContainer");
		$(text1).appendTo("#myContainer");
		$(text2).appendTo("#myContainer");
		$(text3).appendTo("#myContainer");
		$(text4).appendTo("#myContainer");
		$(text5).appendTo("#myContainer");
		
		loadText.innerHTML = "Loading...";
				
	};
		

	// After the map style has loaded on the page, add a source layer and default
	// styling for a single point.
	map.on('load', function() {
				
		map.addLayer({
			'id': 'programs',
			'type': 'fill',
			'source': {
				'type': 'geojson',
				'data': 'programs.geojson'
			},
			'layout': {},
			'paint': {
				'fill-color': 'black',
				'fill-opacity': 0.5
			}
		});
				
		map.addSource('single-point', {
			"type": "geojson",
			"data": {
				"type": "FeatureCollection",
				"features": []
			}
		});

		map.addLayer({
			"id": "point",
			"source": "single-point",
			"type": "circle",
			"paint": {
				"circle-radius": 5,
				"circle-color": "#007cbf"
			}
		});

		// Listen for the `geocoder.input` event that is triggered when a user
		// makes a selection and add a symbol that matches the result.
		geocoder.on('result', function(ev) {
			map.getSource('single-point').setData(ev.result.geometry);
			loadText.style.visibility = "visible";
			
			
			window.setTimeout(function() {
				loadText.style.visibility = "hidden";
				var features = map.queryRenderedFeatures(ev.result.geometry.coordinates, { layers: ['programs'] });
				var layer = features[0];
					
				document.getElementById('text1').innerHTML = "ATT: " + layer.properties.ATT;
				document.getElementById('text2').innerHTML = "CenturyLin: " + layer.properties.CenturyLin;
				document.getElementById('text3').innerHTML = "Charter_Co: " + layer.properties.Charter_Co;
				document.getElementById('text4').innerHTML = "Comcast: " + layer.properties.Comcast;
				document.getElementById('text5').innerHTML = "Frontier_C: " + layer.properties.Frontier_C;	
			}, 3000);		
		});
	});
})();