var countyIDArr = [
	"ashlandWetlands",
	"bayfieldWetlands",
	"brownWetlands",
	"doorWetlands",
	"douglasWetlands",
	"ironWetlands",
	"kenoshaWetlands",
	"kewauneeWetlands",
	"marinetteWetlands",
	"ozaukeeWetlands",
	"racineWetlands",
	"sheboyganWetlands"
];
	
var waterIDArr = [
	"ashlandWater",
	"bayfieldWater",
	"brownWater",
	"doorWater",
	"douglasWater",
	"ironWater",
	"kenoshaWater",
	"kewauneeWater",
	"marinetteWater",
	"ozaukeeWater",
	"racineWater",
	"sheboyganWater"
];
	
var tempWaterLayers = [];
	
var countyNames = [
	"Ashland",
	"Bayfield",
	"Brown",
	"Door",
	"Douglas",
	"Iron",
	"Kenosha",
	"Kewaunee",
	"Marinette",
	"Ozaukee",
	"Racine",
	"Sheboygan"
];
	
var currentLayers = [];
var currentWaterLayers = [];

var clickedCountyName;
	
var tempLayers = [];
	
var hoverLayers = [
	"county-fills",
	"landcover_A1"
];
	
var wetlandsLegendHolder;
var wetlandsLegend = [
	"A4",
	"A3",
	"B4",
	"C4",
	"C4b",
	"F4",
	"MF",
	"ER"
]
	
var tempMouseOverArr = [];

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
		'id': 'county-fills',
		'type': 'fill',
		'source': 'coastalCounties',
		'layout': {
			'visibility': 'visible'
		},
		'paint': {
			'fill-color': '#f08',
			'fill-opacity': 0
		}
	});
	
		
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

