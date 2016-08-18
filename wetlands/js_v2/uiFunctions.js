
$('.scroll-pane').jScrollPane({
	verticalDragMinHeight: 20,
	verticalDragMaxHeight: 20
});

var api = $('.scroll-pane').data('jsp');
var throttleTimeout;
$(window).bind(
	'resize',
	function()
	{
		if (!throttleTimeout) {
			throttleTimeout = setTimeout(
				function()
				{
					api.reinitialise();
					throttleTimeout = null;
				},
				50
			);
		}
	}
);

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
	value: 100,
	radius: 40,
	width: 10,
	handleSize: 22,
	startAngle: 315,
	endAngle: "+360",
	animation: true,
	showTooltip: true,
	editableToolTip: false,
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
	drag: null,
	change: onCircleChange,
	stop: null,
	tooltipFormat: circleToolTip
});

function onCircleChange (e) {
	var circleValue = e.value;
	var n;
	for (n=0; n < opacityLayers.length; n++) {
		map.setPaintProperty(opacityLayers[n], 'fill-opacity', parseInt(circleValue, 10) / 100);
	}
	//map.setPaintProperty('coastalWaters', 'fill-opacity', parseInt(circleValue, 10) / 100);
};

function circleToolTip(args) {
	return args.value + "%";
};

function circleToggleColor(source) {
	switch (source) {
		case "toggle01":
			if (toggle01Control == false) {
				document.getElementById(source).style.background = "#5499C7";
				toggle01Control = true;
				break;
			} else if (toggle01Control == true) {
				document.getElementById(source).style.background = "#fff";
				toggle01Control = false;
				break;
			}
		case "toggle02":
			if (toggle02Control == false) {
				document.getElementById(source).style.background = "#5499C7";
				toggle02Control = true;
				break;
			} else if (toggle02Control == true) {
				document.getElementById(source).style.background = "#fff";
				toggle02Control = false;
				break;
			}
		case "toggle03":
			if (toggle03Control == false) {
				document.getElementById(source).style.background = "#5499C7";
				toggle03Control = true;
				break;
			} else if (toggle03Control == true) {
				document.getElementById(source).style.background = "#fff";
				toggle03Control = false;
				break;
			}
		case "toggle04":
			if (toggle04Control == false) {
				document.getElementById(source).style.background = "#5499C7";
				toggle04Control = true;
				
			} else if (toggle04Control == true) {
				document.getElementById(source).style.background = "#fff";
				toggle04Control = false;
				
			}
	}
};








