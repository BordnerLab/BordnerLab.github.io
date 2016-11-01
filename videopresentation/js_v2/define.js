

var clickedCountyName;

var hoveredCountyLandcover;
var hoveredCountyPoint;

var legendHoverCover;
	
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
	"Unknown Cover",
	"pointsUnknown",
	"pointsOther",
	"pointsSpring",
	"pointsUrban",
	"pointsFarm",
	"pointsResidence",
	"pointsCemetery",
	"pointsErosion"
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

var pointLayerNames = [
	"pointsErosion",
	"pointsCemetery",
	"pointsResidence",
	"pointsFarm",
	"pointsUnknown",
	"pointsOther",
	"pointsSpring",
	"pointsUrban"
];

var mainLegend = [
	["AG", "#E59966", "Agriculture"],
	["UR", "#C0392A", "Urban"],
	["BA", "#AFB7C0", "Barren"],
	["SL", "#FAD79E", "Shrubland"],
	["MF", "#A66ABE", "Mixed Forest"],
	["WL", "#5FAEE3", "Wetlands"],
	["DF", "#54C083", "Deciduous Forest"],
	["CF", "#19703E", "Coniferous Forest"],
	["O", "#76D6C3", "Other"],
	["U", "#FADC70", "Unknown"]
];

var pointLayers = [
	['C', 'Cemetery'],
	['CF', 'Cheese Factory'],
	['CH', 'Church'],
	['CR', 'Cannery'],
	['E', 'Erosion'],
	['F/G', 'Unknown'],
	['FB', 'Farm'],
	['FF', 'Fur Farm'],
	['FT', 'Fire Tower'],
	['GC', 'Golf Course'],
	['GL', 'Unknown'],
	['GP', 'Gravel Pit'],
	['H', 'Hotel'],
	['O', 'Orchard'],
	['OH', 'Occupied House'],
	['OSCH', 'Occupied School'],
	['Qu', 'Quarry'],
	['S', 'Spring'],
	['SH', 'Summer House'],
	['SL', 'Unknown'],
	['SP', 'Unknown'],
	['T', 'Tavern'],
	['TH', 'Townhall'],
	['U', 'Unknown'],
	['VH', 'Vacant House']
];

var combinationLayers = [
	['A3', '#fbb03b', 'Swamp Hardwoods'],
	['A4', '#2980B9', 'Tagalder, Willow, Dogwood, Etc.'],
	['B4', '#e55e5e', 'Cat Tail Marsh'],
	['C4', '#3bb2d0', 'Grass Marsh'],
	['C4b', '#ccc', 'Sedge Marsh'],
	['AP', '#D98880', 'Abandoned Pasture'],
	['BB', '#C39BD3', 'Blueberry'],
	['C', '#7FB3D5', 'Cleared Cropland'],
	['CS', '#5DADE2', 'Cultivated Stump Land'],
	['F4', '#76D7C4', 'Cranberry Marsh'],
	['FP', '#7DCEA0', 'Forest Plantation'],
	['P', '#F1C40F', 'Pasture'],
	['PP', '#FDEBD0', 'Permanent Pasture'],
	['SP', '#A93226', 'Stump Pasture'],
	['OR', '#D6DBDF', 'Orchard'],
	['ARPT', '#D98880', 'Airport'],
	['CM', '#C39BD3', 'Cemetery'],
	['CT', '#7FB3D5', 'City'],
	['FF', '#5DADE2', 'Fur Farm'],
	['FG', '#76D7C4', 'Fair Grounds'],
	['FX', '#7DCEA0', 'Fox Farm'],
	['GC', '#F1C40F', 'Golf Course'],
	['MY', '#FDEBD0', 'Mill Yard'],
	['Qz', '#A93226', 'Quarry'],
	['CA', '#D6DBDF', 'Camp'],
	['PD', '#5D6D7E', 'Public Dump'],
	['U', '#E67E22', 'U -'],
	['CL', '#D98880', 'Clay Pit'],
	['GP', '#C39BD3', 'Gravel Pit'],
	['MF', '#7FB3D5', 'Mud Flats'],
	['RO', '#5DADE2', 'Rock Outcrop'],
	['A', '#76D7C4', 'Abandoned'],
	['CPP', '#7DCEA0', 'Poor Land Previously Cropped'],
	['O', '#F1C40F', 'Open'],
	['A1', '#D98880', 'Upland Hardwoods'],
	['A2', '#C39BD3', 'Hemlock with Hardwood'],
	['B', '#7FB3D5', 'Birch'],
	['C1', '#5DADE2', 'Popple with White Birch'],
	['C1b', '#76D7C4', 'Inferior C1'],
	['D', '#7DCEA0', 'Scrub Oak'],
	['D1', '#F1C40F', 'Oak - Hickory'],
	['D1b', '#FDEBD0', 'Inferior D1'],
	['D1u', '#A93226', 'Good Quality with White Oak'],
	['D1uu', '#D6DBDF', 'Medium Gr. Mostly Red Oak'],
	['D3b', '#5D6D7E', 'Balsam'],
	['BD', '#D98880', 'Beaver Dam'],
	['BF', '#C39BD3', 'Beaver Flowage'],
	['BP', '#7FB3D5', 'Beaver Pond'],
	['IS', '#5DADE2', 'Island'],
	['D5', '#76D7C4', 'Recent Burn'],
	['D5b', '#7DCEA0', 'Dead Timber'],
	['S', '#F1C40F', 'Stump'],
	['Blowdown', '#FDEBD0', 'Blowdown'],
	['Cutover', '#A93226', 'Cutover'],
	['Rcnt. Cut', '#D6DBDF', 'Recent Cut'],
	['Slash', '#5D6D7E', 'Slash'],
	['D4', '#D98880', 'Leather Leaf'],
	['E1', '#C39BD3', 'Pin Cherry'],
	['E4', '#7FB3D5', 'Weedy Peat'],
	['UG', '#5DADE2', 'Unknown Grassland'],
	['B2', '#D98880', 'White Pine'],
	['B3', '#C39BD3', 'White Cedar'],
	['C2', '#7FB3D5', 'Norway Pine'],
	['C3', '#5DADE2', 'Tamarack'],
	['D2', '#76D7C4', 'Jack Pine'],
	['D3', '#7DCEA0', 'Black Spruce'],
	['B1', '#D98880', 'Hardwood with Conifers'],
	['B1b', '#C39BD3', 'Inferior B1'],
	['UF', '#7FB3D5', 'Unknown Forest'],
	['A5', '#D98880', 'A5 -'],
	['AA', '#C39BD3', 'AA -'],
	['AC', '#7FB3D5', 'AC -'],
	['AR', '#5DADE2', 'AR -'],
	['CCC', '#76D7C4', 'CCC -'],
	['CP', '#7DCEA0', 'CP -'],
	['D3u', '#F1C40F', 'D3u -'],
	['E2', '#FDEBD0', 'E2 -'],
	['F', '#A93226', 'F -'],
	['OA', '#D6DBDF', 'OA -'],
	['OC', '#5D6D7E', 'OC -']
];



var wetlandsLayers = [
	['A3', '#fbb03b', 'Swamp Hardwoods'],
	['A4', '#2980B9', 'Tagalder, Willow, Dogwood, Etc.'],
	['B4', '#e55e5e', 'Cat Tail Marsh'],
	['C4', '#3bb2d0', 'Grass Marsh'],
	['C4b', '#ccc', 'Sedge Marsh']
];

var agricultureLayers = [
	['AP', '#D98880', 'Abandoned Pasture'],
	['BB', '#C39BD3', 'Blueberry'],
	['C', '#7FB3D5', 'Cleared Cropland'],
	['CS', '#5DADE2', 'Cultivated Stump Land'],
	['F4', '#76D7C4', 'Cranberry Marsh'],
	['FP', '#7DCEA0', 'Forest Plantation'],
	['P', '#F1C40F', 'Pasture'],
	['PP', '#FDEBD0', 'Permanent Pasture'],
	['SP', '#A93226', 'Stump Pasture'],
	['OR', '#D6DBDF', 'Orchard']
];

var urbanLayers = [
	['ARPT', '#D98880', 'Airport'],
	['CM', '#C39BD3', 'Cemetery'],
	['CT', '#7FB3D5', 'City'],
	['FF', '#5DADE2', 'Fur Farm'],
	['FG', '#76D7C4', 'Fair Grounds'],
	['FX', '#7DCEA0', 'Fox Farm'],
	['GC', '#F1C40F', 'Golf Course'],
	['MY', '#FDEBD0', 'Mill Yard'],
	['Qz', '#A93226', 'Quarry'],
	['CA', '#D6DBDF', 'Camp'],
	['PD', '#5D6D7E', 'Public Dump'],
	['U', '#E67E22', 'U -']
];

var barrenLayers = [
	['CL', '#D98880', 'Clay Pit'],
	['GP', '#C39BD3', 'Gravel Pit'],
	['MF', '#7FB3D5', 'Mud Flats'],
	['RO', '#5DADE2', 'Rock Outcrop'],
	['A', '#76D7C4', 'Abandoned'],
	['CPP', '#7DCEA0', 'Poor Land Previously Cropped'],
	['O', '#F1C40F', 'Open']
];

var deciduousforestLayers = [
	['A1', '#D98880', 'Upland Hardwoods'],
	['A2', '#C39BD3', 'Hemlock with Hardwood'],
	['B', '#7FB3D5', 'Birch'],
	['C1', '#5DADE2', 'Popple with White Birch'],
	['C1b', '#76D7C4', 'Inferior C1'],
	['D', '#7DCEA0', 'Scrub Oak'],
	['D1', '#F1C40F', 'Oak - Hickory'],
	['D1b', '#FDEBD0', 'Inferior D1'],
	['D1u', '#A93226', 'Good Quality with White Oak'],
	['D1uu', '#D6DBDF', 'Medium Gr. Mostly Red Oak'],
	['D3b', '#5D6D7E', 'Balsam']
];

var otherLayers = [
	['BD', '#D98880', 'Beaver Dam'],
	['BF', '#C39BD3', 'Beaver Flowage'],
	['BP', '#7FB3D5', 'Beaver Pond'],
	['IS', '#5DADE2', 'Island'],
	['D5', '#76D7C4', 'Recent Burn'],
	['D5b', '#7DCEA0', 'Dead Timber'],
	['S', '#F1C40F', 'Stump'],
	['Blowdown', '#FDEBD0', 'Blowdown'],
	['Cutover', '#A93226', 'Cutover'],
	['Rcnt. Cut', '#D6DBDF', 'Recent Cut'],
	['Slash', '#5D6D7E', 'Slash']
];

var shrublandLayers = [
	['D4', '#D98880', 'Leather Leaf'],
	['E1', '#C39BD3', 'Pin Cherry'],
	['E4', '#7FB3D5', 'Weedy Peat'],
	['UG', '#5DADE2', 'Unknown Grassland']
];

var coniferousforestLayers = [
	['B2', '#D98880', 'White Pine'],
	['B3', '#C39BD3', 'White Cedar'],
	['C2', '#7FB3D5', 'Norway Pine'],
	['C3', '#5DADE2', 'Tamarack'],
	['D2', '#76D7C4', 'Jack Pine'],
	['D3', '#7DCEA0', 'Black Spruce']
];

var mixedforestLayers = [
	['B1', '#D98880', 'Hardwood with Conifers'],
	['B1b', '#C39BD3', 'Inferior B1'],
	['UF', '#7FB3D5', 'Unknown Forest']
];

var unknownLayers = [
	['A5', '#D98880', 'A5 -'],
	['AA', '#C39BD3', 'AA -'],
	['AC', '#7FB3D5', 'AC -'],
	['AR', '#5DADE2', 'AR -'],
	['CCC', '#76D7C4', 'CCC -'],
	['CP', '#7DCEA0', 'CP -'],
	['D3u', '#F1C40F', 'D3u -'],
	['E2', '#FDEBD0', 'E2 -'],
	['F', '#A93226', 'F -'],
	['OA', '#D6DBDF', 'OA -'],
	['OC', '#5D6D7E', 'OC -']
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
	/*
	map.addSource('pointMerge', {
		'type': 'geojson',
		'data': 'data/points/pointMerge.geojson'
	});
	*/
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
	/*
	map.addLayer({
		'id': 'pointMerge',
		'source': 'pointMerge',
		'type': 'symbol',
		'layout': {
			'icon-image': 'harbor-15'
		}
	});
	*/
};



	
	
	
	
	
	
