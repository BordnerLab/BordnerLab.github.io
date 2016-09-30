

var clickedCountyName;
	
var hoverLayers = [
	"Agriculture",
	"Deciduous Forest",
	"Other",
	"Urban",
	"Barren",
	"Shrubland",
	"Wetlands",
	"Coniferous Forest",
	"Mixed Forest",
	"Unknown Cover"
];

var landcoverLayers = [
	"Agriculture",
	"Deciduous Forest",
	"Other",
	"Urban",
	"Barren",
	"Shrubland",
	"Wetlands",
	"Coniferous Forest",
	"Mixed Forest",
	"Unknown Cover"
];

var mainLegend = [
	["AG", "#E59966"],
	["UR", "#C0392A"],
	["BA", "#AFB7C0"],
	["SL", "#FAD79E"],
	["MF", "#A66ABE"],
	["WL", "#5FAEE3"],
	["DF", "#54C083"],
	["CF", "#19703E"],
	["O", "#76D6C3"],
	["U", "#FADC70"]
];



var wetlandsLayers = [
	['A3', '#fbb03b'],
	['A4', '#223b53'],
	['B4', '#e55e5e'],
	['C4', '#3bb2d0'],
	['C4b', '#ccc']
];

var agricultureLayers = [
	['AP', '#D98880'],
	['BB', '#C39BD3'],
	['C', '#7FB3D5'],
	['CS', '#5DADE2'],
	['F4', '#76D7C4'],
	['FP', '#7DCEA0'],
	['P', '#F1C40F'],
	['PP', '#FDEBD0'],
	['SP', '#873600'],
	['OR', '#D6DBDF']
];

var urbanLayers = [
	['ARPT', '#D98880'],
	['CM', '#C39BD3'],
	['CT', '#7FB3D5'],
	['FF', '#5DADE2'],
	['FG', '#76D7C4'],
	['FX', '#7DCEA0'],
	['GC', '#F1C40F'],
	['MY', '#FDEBD0'],
	['Qz', '#873600'],
	['CA', '#D6DBDF'],
	['PD', '#2C3E50'],
	['U', '#641E16']
];

var barrenLayers = [
	['CL', '#D98880'],
	['GP', '#C39BD3'],
	['MF', '#7FB3D5'],
	['RO', '#5DADE2'],
	['A', '#76D7C4'],
	['CPP', '#7DCEA0'],
	['O', '#F1C40F']
];

var deciduousforestLayers = [
	['A1', '#D98880'],
	['A2', '#C39BD3'],
	['B', '#7FB3D5'],
	['C1', '#5DADE2'],
	['C1b', '#76D7C4'],
	['D', '#7DCEA0'],
	['D1', '#F1C40F'],
	['D1b', '#FDEBD0'],
	['D1u', '#873600'],
	['D1uu', '#D6DBDF'],
	['D3b', '#2C3E50']
];

var otherLayers = [

];

var shrublandLayers = [

];

var coniferousforestLayers = [

];

var mixedforestLayers = [

];

var unknownLayers = [

];



var waterDisplayControl = false;
var wetlandsDisplayControl = true;

var data;
var getCanvasControl = false;


var toggle01Control = false;
var toggle02Control = true;
var toggle03Control = false;
var toggle04Control = false;

var opacityLayers = [
	"coastalWaters"
];

var threeDControl = false;




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



	
	
	
	
	
	
