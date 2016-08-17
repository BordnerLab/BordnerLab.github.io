var toolbarControl = 0;
function toggleToolbar() {
	if (toolbarControl == 0) {
		document.getElementById("toolbar").style.transform = "translate(0)";
		document.getElementById("grabHandleToggle").className = "fa fa-angle-double-right";
		toolbarControl = 1;
		return toolbarControl;
	} else if (toolbarControl > 0) {
		document.getElementById("toolbar").style.transform = "";
		document.getElementById("grabHandleToggle").className = "fa fa-angle-double-left";
		toolbarControl = 0;
		return toolbarControl;
	}
};






function homePageFunction() {
	document.getElementById("homePageBackground").style.transform = "translate(100%)";
	document.getElementById("homePage").style.transform = "translate(100%)";
};

$("#slider").roundSlider({
	min:0,
	max:100,
	step:1,
	value: null,
	radius: 50,
	width: 16,
	handleSize: "+0",
	startAngle: 315,
	endAngle: "+360",
	animation: true,
	showTooltip: true,
	editableToolTip: true,
	readOnly: false,
	disabled: false,
	keyboardAction: true,
	mouseScrollAction: false,
	sliderType: "min-range",
	circleShape: "pie",
	handleShape: "round",
	lineCap: "square",
	
	beforeCreate: null,
	create: null,
	start: null,
	drag: onCircleChange,
	change: null,
	stop: null,
	tooltipFormat: null
});

function onCircleChange (e) {
	var circleValue = e.value;
	map.setPaintProperty('coastalWaters', 'fill-opacity', parseInt(circleValue, 10) / 100);
};