


$("#slider").roundSlider({
	min:0,
	max:100,
	step:1,
	value: 100,
	radius: 75,
	width: 20,
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
				
				opacityLayers.push('Agriculture', 'Deciduous Forest', 'Other', 'Urban', 'Barren', 'Shrubland', 'Wetlands', 'Coniferous Forest', 'Mixed Forest', 'Unknown Cover');
				break;
			} else if (toggle01Control == true) {
				document.getElementById(source).style.background = "#fff";
				toggle01Control = false;
				
				var a;
				for(a=0; a < landcoverLayers.length; a++){
					var placeholder = landcoverLayers[a];
					var index = opacityLayers.indexOf(placeholder);
					if (index != -1){
						opacityLayers.splice(index, 1);
					}
				}
				
				break;
			}
		case "toggle02":
			if (toggle02Control == false) {
				document.getElementById(source).style.background = "#5499C7";
				toggle02Control = true;
				
				opacityLayers.push('coastalWaters');
				break;
			} else if (toggle02Control == true) {
				document.getElementById(source).style.background = "#fff";
				toggle02Control = false;
				
				var index2 = opacityLayers.indexOf('coastalWaters');
				if (index != -1){
					opacityLayers.splice(index2, 1);
				}
				
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



var showOpacityControlsControl = 0;
function showOpacityControls() {
	if (showOpacityControlsControl == 0) {
		document.getElementById("button01").style.color = "#fff";
		document.getElementById("button01").style.background = "#154360";
		
		document.getElementById("circleSliderContainer").style.left = "10px";
		document.getElementById("slider").style.left = "20px";
		document.getElementById("circleSliderControls").style.left = "110px";
		showOpacityControlsControl = 1;
	} else if (showOpacityControlsControl > 0) {
		document.getElementById("button01").style.color = "black";
		document.getElementById("button01").style.background = "#fff";
		
		document.getElementById("circleSliderContainer").style.left = "-300px";
		document.getElementById("slider").style.left = "-290px";
		document.getElementById("circleSliderControls").style.left = "-190px";
		showOpacityControlsControl = 0;
	}
};

function closeOpacityControls() {
	document.getElementById("circleSliderContainer").style.left = "-300px";
	document.getElementById("slider").style.left = "-290px";
	document.getElementById("circleSliderControls").style.left = "-190px";
	
	document.getElementById("button01").style.color = "black";
	document.getElementById("button01").style.background = "#fff";
	showOpacityControlsControl = 0;
};


var toggleThreeDdisplayControl = 0;
function toggleThreeDdisplay(source) {
	
	if (toggleThreeDdisplayControl == 0) {
		document.getElementById(source).style.background = "#1F618D";
		document.getElementById(source).style.color = "white";
		map.setPitch(35);
		threeDControl = true;
		toggleThreeDdisplayControl = 1;
		
		
		window.history.pushState("hello", "test", "testCopy");
		
		
	} else if (toggleThreeDdisplayControl > 0) {
		document.getElementById(source).style.background = "";
		document.getElementById(source).style.color = "";
		map.setPitch(0.1);
		threeDControl = false;
		toggleThreeDdisplayControl = 0;
		window.history.back();
	}
};


var showButton02ControlsControl = 0;
function showButton02Controls() {
	if (showButton02ControlsControl == 0) {
		document.getElementById("button02").style.color = "#fff";
		document.getElementById("button02").style.background = "#154360";
		map.setStyle('mapbox://styles/bordnerwlei/cis24cuiv0002gtkop2y3wnuc');
		showButton02ControlsControl = 1;
	} else if (showButton02ControlsControl > 0) {
		document.getElementById("button02").style.color = "black";
		document.getElementById("button02").style.background = "#fff";
		map.setStyle('mapbox://styles/bordnerwlei/cirf7wsrr0003g8nlogxrqxyr');
		showButton02ControlsControl = 0;
	}	
};


var alterLegendInfoClickControl = 0;
function alterLegendInfoClick(source) {
	var sourcePlaceholder = document.getElementById(source);
	
	if (alterLegendInfoClickControl == 0) {
		switch (source) {
			case "AG":
				map.setLayoutProperty('Agriculture', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "UR":
				map.setLayoutProperty('Urban', 'visibility', 'visible');
				
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "BA":
				map.setLayoutProperty('Barren', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "SL":
				map.setLayoutProperty('Shrubland', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "MF":
				map.setLayoutProperty('Mixed Forest', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "WL":
				map.setLayoutProperty('Wetlands', 'visibility', 'visible');
				
				changeLegendAndMap();
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "DF":
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "CF":
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "O":
				map.setLayoutProperty('Other', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				map.setLayoutProperty('Unknown Cover', 'visibility', 'none');
				break;
			case "U":
				map.setLayoutProperty('Unknown Cover', 'visibility', 'visible');
				
				map.setLayoutProperty('Urban', 'visibility', 'none');
				map.setLayoutProperty('Barren', 'visibility', 'none');
				map.setLayoutProperty('Shrubland', 'visibility', 'none');
				map.setLayoutProperty('Mixed Forest', 'visibility', 'none');
				map.setLayoutProperty('Wetlands', 'visibility', 'none');
				map.setLayoutProperty('Deciduous Forest', 'visibility', 'none');
				map.setLayoutProperty('Coniferous Forest', 'visibility', 'none');
				map.setLayoutProperty('Other', 'visibility', 'none');
				map.setLayoutProperty('Agriculture', 'visibility', 'none');
				
		}
		alterLegendInfoClickControl = 1;
	} else if (alterLegendInfoClickControl > 0) {
		map.setLayoutProperty('Unknown Cover', 'visibility', 'visible');
				
		map.setLayoutProperty('Urban', 'visibility', 'visible');
		map.setLayoutProperty('Barren', 'visibility', 'visible');
		map.setLayoutProperty('Shrubland', 'visibility', 'visible');
		map.setLayoutProperty('Mixed Forest', 'visibility', 'visible');
		map.setLayoutProperty('Wetlands', 'visibility', 'visible');
		map.setLayoutProperty('Deciduous Forest', 'visibility', 'visible');
		map.setLayoutProperty('Coniferous Forest', 'visibility', 'visible');
		map.setLayoutProperty('Other', 'visibility', 'visible');
		map.setLayoutProperty('Agriculture', 'visibility', 'visible');
		alterLegendInfoClickControl = 0;
	}
};




function removeLandingPage() {
	document.getElementById("landingPage").style.opacity = "0";
	
	setTimeout(
		function() {
			document.getElementById("loadingScreen").style.visibility = "visible";
		}, 100);
		
	setTimeout(
		function(){
			var item = document.getElementById("landingPage");
			item.parentNode.removeChild(item);
		}, 1500);
			
	setTimeout(
		function(){
			document.getElementById("loadingScreen").style.visibility = "hidden";
			MoveStoryModeForward();
		}, 4000);
}





