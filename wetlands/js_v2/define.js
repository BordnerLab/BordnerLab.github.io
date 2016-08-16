



var clickedCountyName;
	
var hoverLayers = [
	"landcover_A1"
];




var waterDisplayControl = false;
var wetlandsDisplayControl = true;

var data;
var getCanvasControl = false;





function addMapSources() {
	map.addSource('coastalCounties', {
		'type': 'geojson',
		'data': 'data/counties.geojson'
	});
	
	map.addSource('single-point', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': []
		}
	});
};

function addCountyInitial() {
	map.addLayer({
		'id': 'county-borders',
		'type': 'line',
		'source': 'coastalCounties',
		'layout': {
			'visibility': 'visible'
		},
		'paint': {
			'line-color': 'black',
			'line-width': 1
		}
	});
	
	map.addLayer({
		'id': 'point',
		'source': 'single-point',
		'type': 'circle',
		'paint': {
			'circle-radius': 10,
			'circle-color': '#007cbf'
		}
	});
};





var originCover = [
	["AP", "#E59966"],
	["BB", "#E59966"],
	["C", "#E59966"],
	["CS", "#E59966"],
	["F4", "#E59966"],
	["FP", "#E59966"],
	["P", "#E59966"],
	["PP", "#E59966"],
	["SP", "#E59966"],
	["OR", "#E59966"],
	["ARPT", "#C0392A"],
	["CM", "#C0392A"],
	["CT", "#C0392A"],
	["FF", "#C0392A"],
	["FG", "#C0392A"],
	["FX", "#C0392A"],
	["GC", "#C0392A"],
	["MY", "#C0392A"],
	["Qz", "#C0392A"],
	["Rec", "#C0392A"],
	["CA", "#C0392A"],
	["PD", "#C0392A"],
	["U", "#C0392A"],
	["CL", "#AFB7C0"],
	["GP", "#AFB7C0"],
	["MF", "#AFB7C0"],
	["RO", "#AFB7C0"],
	["A", "#AFB7C0"],
	["CPP", "#AFB7C0"],
	["O", "#AFB7C0"],
	["D4", "#FAD79E"],
	["E1", "#FAD79E"],
	["E4", "#FAD79E"],
	["UG", "#FAD79E"],
	["B1", "#A66ABE"],
	["B1b", "#A66ABE"],
	["UF", "#A66ABE"],
	["A3", "#5FAEE3"],
	["A4", "#5FAEE3"],
	["B4", "#5FAEE3"],
	["C4", "#5FAEE3"],
	["C4b", "#5FAEE3"],
	["A1", "#54C083"],
	["A2", "#54C083"],
	["B", "#54C083"],
	["C1", "#54C083"],
	["C1b", "#54C083"],
	["D", "#54C083"],
	["D1", "#54C083"],
	["D1b", "#54C083"],
	["D1u", "#54C083"],
	["D1uu", "#54C083"],
	["D3b", "#54C083"],
	["B2", "#19703E"],
	["B3", "#19703E"],
	["C2", "#19703E"],
	["C3", "#19703E"],
	["D2", "#19703E"],
	["D3", "#19703E"],
	["BD", "#76D6C3"],
	["BF", "#76D6C3"],
	["BP", "#76D6C3"],
	["Blowdown", "#76D6C3"],
	["IS", "#76D6C3"],
	["Cutover", "#76D6C3"],
	["D5", "#76D6C3"],
	["D5b", "#76D6C3"],
	["Slash", "#76D6C3"],
	["Bluff", "#76D6C3"],
	["S", "#76D6C3"],
	["Windfall", "#76D6C3"],
	["Sch. Gs", "#76D6C3"],
	["A5", "#FADC70"],
	["AA", "#FADC70"],
	["AC", "#FADC70"],
	["AR", "#FADC70"],
	["CCC", "#FADC70"],
	["CP", "#FADC70"],
	["D3u", "#FADC70"],
	["E2", "#FADC70"],
	["F", "#FADC70"],
	["OA", "#FADC70"],
	["OC", "#FADC70"],
	["OP", "#FADC70"],
	["PA", "#FADC70"],
	["PO", "#FADC70"],
	["PS", "#FADC70"],
	["SC", "#FADC70"],
	["SD", "#FADC70"]
];
	
	
	
	
	
	
	
