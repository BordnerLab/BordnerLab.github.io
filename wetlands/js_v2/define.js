



var clickedCountyName;
	
var hoverLayers = [
	"landcover_A1"
];




var waterDisplayControl = false;
var wetlandsDisplayControl = true;

var data;
var getCanvasControl = false;



var wetlandsCover = [
	"A3",
	"A4",
	"B4",
	"C4",
	"C4b"
];

var deciduousCover = [
	"A1",
	"A2",
	"B",
	"C1",
	"C1b",
	"D",
	"D1",
	"D1b",
	"D1u",
	"D1uu",
	"D3b"
];

var coniferCover = [
	"B2",
	"B3",
	"C2",
	"C3",
	"D2",
	"D3"
];

var agricultureCover = [
	"AP",
	"BB",
	"C",
	"CS",
	"F4",
	"FP",
	"P",
	"PP",
	"SP",
	"OR"
];

var urbanCover = [
	"ARPT",
	"CM",
	"CT",
	"FF",
	"FG",
	"FX",
	"GC",
	"MY",
	"Qz",
	"Rec",
	"CA",
	"PD",
	"Urban",
	"U"
];

var barrenCover = [
	"CL",
	"GP",
	"MF",
	"RO",
	"A",
	"CPP",
	"O"
];

var shrublandCover = [
	"D4",
	"E1",
	"E4",
	"UG"
];

var mixedforestCover = [
	"B1",
	"B1b",
	"UF"
];





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

