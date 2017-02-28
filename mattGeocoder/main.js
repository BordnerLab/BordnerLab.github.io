
var geoC = (function() {
	// declare variables
	var loadText = document.getElementById("loadText");
	
	// create and connect to map
	mapboxgl.accessToken = 'pk.eyJ1IjoiYm9yZG5lcndsZWkiLCJhIjoiY2lyZjd1a2tyMDA3dmc2bmtkcjUzaG5meCJ9.eswxCZSAnob59HR0wEaTpA';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/bordnerwlei/cizepw2le005h2so39v1oa0i1',
		center: [-89.4012, 43.0731],
		zoom: 13,
		pitch: 0.1
	});
			
	// create geocoder
	var geocoder = new MapboxGeocoder({
		accessToken: mapboxgl.accessToken
	});
	
	// add geocoder 
	map.addControl(geocoder);
	
	// remove and append geocoder
	$('.mapboxgl-ctrl-geocoder').detach().appendTo('#myContainer');
	
	// assign geocoder
	$('.mapboxgl-ctrl-geocoder').attr("id", "myGeocoder");
	
	// create line
	//myLine = document.createElement("hr");
	// create load text
	//loadText = document.createElement("h3");
	// assign load text id
	//loadText.setAttribute("id", "loadText");
	// append load text
	//$(loadText).appendTo("#myContainer");
	// assign load text content
	//loadText.innerHTML = "Loading...";
	// append line
	//$(myLine).appendTo("#myContainer");
		

	
	map.on('load', function() {
		// add polygon layer
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
		
		// add point source
		map.addSource('single-point', {
			"type": "geojson",
			"data": {
				"type": "FeatureCollection",
				"features": []
			}
		});
		
		// add point layer
		map.addLayer({
			"id": "point",
			"source": "single-point",
			"type": "circle",
			"paint": {
				"circle-radius": 5,
				"circle-color": "#007cbf"
			}
		});

		// Listen for the `geocoder.input` event
		geocoder.on('result', function(ev) {
			map.getSource('single-point').setData(ev.result.geometry);
			loadText.style.visibility = "visible";
			var para = document.getElementsByClassName('gonnaRemove');
			while (para[0]) {
				para[0].parentNode.removeChild(para[0]);
			}
			
			var executed = false;
			window.setTimeout(function() {
				if (!executed) {
					loadText.style.visibility = "hidden";
					var features = map.queryRenderedFeatures(ev.result.geometry.coordinates, { layers: ['programs'] });
					var layer = features[0];
				
					// here we can replace with a function call with parameters
					addAndPopulateLinks(layer.properties.ATT, layer.properties.CenturyLin, 
						layer.properties.Charter_Co, layer.properties.Comcast, layer.properties.Frontier_C);
					executed = true;
				}
			}, 3000);		
		});
	});
	
	// function to add and populate links
	function addAndPopulateLinks(ATT, CenturyLin, CharterCo, Comcast, FrontierC) {
		var link1 = document.createElement("a");
		var link2 = document.createElement("a");
		var link3 = document.createElement("a");
		var link4 = document.createElement("a");
		var link5 = document.createElement("a");
		
		link1.setAttribute("class", "gonnaRemove");
		link2.setAttribute("class", "gonnaRemove");
		link3.setAttribute("class", "gonnaRemove");
		link4.setAttribute("class", "gonnaRemove");
		link5.setAttribute("class", "gonnaRemove");
		
		link1.setAttribute("target", "_blank");
		link2.setAttribute("target", "_blank");
		link3.setAttribute("target", "_blank");
		link4.setAttribute("target", "_blank");
		link5.setAttribute("target", "_blank");
		
		if (ATT != "No discount program") {
			link1.setAttribute("href", ATT);
			link1.innerHTML = "ATT: " + ATT;
		} else {
			link1.innerHTML = "No discount program";
		}
		
		if (CenturyLin != "No discount program") {
			link2.setAttribute("href", CenturyLin);
			link2.innerHTML = "CenturyLin: " + CenturyLin;
		} else {
			link2.innerHTML = "No discount program";
		}
		
		if (CharterCo != "No discount program") {
			link3.setAttribute("href", CharterCo);
			link3.innerHTML = "CharterCo: " + CharterCo;
		} else {
			link3.innerHTML = "No discount program";
		}
		
		if (Comcast != "No discount program") {
			link4.setAttribute("href", Comast);
			link4.innerHTML = "Comcast: " + Comcast;
		} else {
			link4.innerHTML = "No discount program";
		}
		
		if (FrontierC != "No discount program") {
			link5.setAttribute("href", FrontierC);
			link5.innerHTML = "FrontierC: " + FrontierC;
		} else {
			link5.innerHTML = "No discount program";
		}
		
		$(link1).appendTo("#myContainer");
		$(link2).appendTo("#myContainer");
		$(link3).appendTo("#myContainer");
		$(link4).appendTo("#myContainer");
		$(link5).appendTo("#myContainer");
	}
	
})();