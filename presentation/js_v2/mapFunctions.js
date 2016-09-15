function determineClick(feature) {
	clickedCountyName = feature.properties.COUNTY_NAM;	
};




var storyModeControl = 0;
var storyTextHeader = document.getElementById("storyNavigationHeader");
var storySubTextHeader = document.getElementById("storySubContextHeader");
var storySubTextBody = document.getElementById("storySubContextBody");
function MoveStoryModeForward() {
	if (storyModeControl == 0) {
		storyModeControl = 1;
		map.flyTo({
			center: [-91.872, 46.25538],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Chippewa Flowage";
		storySubTextHeader.innerHTML = "Chippewa Flowage";
		storySubTextBody.innerHTML = "Information here on the Chippewa Flowage.";
		document.getElementById("rightArrow").style.visibility = "visible";
		document.getElementById("storySubContext").style.visibility = "visible";
		document.getElementById("leftArrowText").innerHTML = "";
		document.getElementById("rightArrowText").innerHTML = "Chippewa Flowage 1";
	} else if (storyModeControl == 1) {
		storyModeControl = 2;
		map.flyTo({
			center: [-90.872, 46.25538],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "Chippewa Flowage 1";
		storySubTextHeader.innerHTML = "Chippewa Flowage 1";
		storySubTextBody.innerHTML = "Information here on the Chippewa Flowage 1.";
		document.getElementById("leftArrow").style.visibility = "visible";
		document.getElementById("leftArrowText").innerHTML = "Chippewa Flowage";
		document.getElementById("rightArrowText").innerHTML = "Chippewa Flowage 2";
	} else if (storyModeControl == 2) {
		storyModeControl = 3;
		map.flyTo({
			center: [-90.872, 46.25538],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "Chippewa Flowage 2";
		storySubTextHeader.innerHTML = "Chippewa Flowage 2";
		storySubTextBody.innerHTML = "Information here on the Chippewa Flowage 2.";
		document.getElementById("leftArrowText").innerHTML = "Chippewa Flowage 1";
		document.getElementById("rightArrowText").innerHTML = "River at White City";
	} else if (storyModeControl == 3) {
		storyModeControl = 4;
		map.flyTo({
			center: [-90.6785, 46.3181],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "River at White City";
		storySubTextHeader.innerHTML = "River at White City";
		storySubTextBody.innerHTML = "Information here on the River at White City.";
		document.getElementById("leftArrowText").innerHTML = "Chippewa Flowage 2";
		document.getElementById("rightArrowText").innerHTML = "River at White City 1";
	} else if (storyModeControl == 4) {
		storyModeControl = 5;
		map.flyTo({
			center: [-90.6785, 46.3181],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "River at White City 1";
		storySubTextHeader.innerHTML = "River at White City 1";
		storySubTextBody.innerHTML = "Information here on the River at White City 1";
		document.getElementById("leftArrowText").innerHTML = "River at White City";
		document.getElementById("rightArrowText").innerHTML = "River at White City 2";
	} else if (storyModeControl == 5) {
		storyModeControl = 6;
		map.flyTo({
			center: [-90.6785, 46.3181],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "River at White City 2";
		storySubTextHeader.innerHTML = "River at White City 2";
		storySubTextBody.innerHTML = "Information here on the River at White City 2";
		document.getElementById("leftArrowText").innerHTML = "River at White City 1";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Ashland County";
	} else if (storyModeControl == 6) {
		storyModeControl = 7;
		map.flyTo({
			center: [-90.8785, 46.115569],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Ashland County";
		storySubTextHeader.innerHTML = "Lakes in Ashland County";
		storySubTextBody.innerHTML = "Information here on the Lakes in Ashland County.";
		document.getElementById("leftArrowText").innerHTML = "River at White City 2";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Ashland County 1";
	} else if (storyModeControl == 7) {
		storyModeControl = 8;
		map.flyTo({
			center: [-90.8785, 46.115569],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Ashland County 1";
		storySubTextHeader.innerHTML = "Lakes in Ashland County 1";
		storySubTextBody.innerHTML = "Information here on the Lakes in Ashland County 1.";
		document.getElementById("leftArrowText").innerHTML = "Lakes in Ashland County";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Ashland County 2";
	} else if (storyModeControl == 8) {
		storyModeControl = 9;
		map.flyTo({
			center: [-90.8785, 46.115569],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Ashland County 2";
		storySubTextHeader.innerHTML = "Lakes in Ashland County 2";
		storySubTextBody.innerHTML = "Information here on the Lakes in Ashland County 2.";
		document.getElementById("leftArrowText").innerHTML = "Lakes in Ashland County 1";
		document.getElementById("rightArrowText").innerHTML = "Gile Flowage";
	} else if (storyModeControl == 9) {
		storyModeControl = 10;
		map.flyTo({
			center: [-90.23016, 46.3976],
			zoom: 12,
			animate: true
		});
		storyTextHeader.innerHTML = "Gile Flowage";
		storySubTextHeader.innerHTML = "Gile Flowage";
		storySubTextBody.innerHTML = "Information here on the Gile Flowage.";
		document.getElementById("leftArrowText").innerHTML = "Lakes in Ashland County 2";
		document.getElementById("rightArrowText").innerHTML = "Gile Flowage 1";
	} else if (storyModeControl == 10) {
		storyModeControl = 11;
		map.flyTo({
			center: [-90.23016, 46.3976],
			zoom: 12,
			animate: true
		});
		storyTextHeader.innerHTML = "Gile Flowage 1";
		storySubTextHeader.innerHTML = "Gile Flowage 1";
		storySubTextBody.innerHTML = "Information here on the Gile Flowage 1.";
		document.getElementById("leftArrowText").innerHTML = "Gile Flowage";
		document.getElementById("rightArrowText").innerHTML = "Gile Flowage 2";
	} else if (storyModeControl == 11) {
		storyModeControl = 12;
		map.flyTo({
			center: [-90.23016, 46.3976],
			zoom: 12,
			animate: true
		});
		storyTextHeader.innerHTML = "Gile Flowage 2";
		storySubTextHeader.innerHTML = "Gile Flowage 2";
		storySubTextBody.innerHTML = "Information here on the Gile Flowage 2.";
		document.getElementById("leftArrowText").innerHTML = "Gile Flowage 1";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Door County";
	} else if (storyModeControl == 12) {
		storyModeControl = 13;
		map.flyTo({
			center: [-87.2341, 45.04789],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Door County";
		storySubTextHeader.innerHTML = "Lakes in Door County";
		storySubTextBody.innerHTML = "Information here on the Lakes in Door County.";
		document.getElementById("leftArrowText").innerHTML = "Gile Flowage 2";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Door County 1";
	} else if (storyModeControl == 13) {
		storyModeControl = 14;
		map.flyTo({
			center: [-87.2341, 45.04789],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Door County 1";
		storySubTextHeader.innerHTML = "Lakes in Door County 1";
		storySubTextBody.innerHTML = "Information here on the Lakes in Door County 1.";
		document.getElementById("leftArrowText").innerHTML = "Lakes in Door County";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Door County 2";
	} else if (storyModeControl == 14) {
		storyModeControl = 15;
		map.flyTo({
			center: [-87.2341, 45.04789],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Door County 2";
		storySubTextHeader.innerHTML = "Lakes in Door County 2";
		storySubTextBody.innerHTML = "Information here on the Lakes in Door County 2.";
		document.getElementById("leftArrowText").innerHTML = "Lakes in Door County 1";
		document.getElementById("rightArrowText").innerHTML = "Green Bay";
	} else if (storyModeControl == 15) {
		storyModeControl = 16;
		map.flyTo({
			center: [-88.01247, 44.51006],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Green Bay";
		storySubTextHeader.innerHTML = "Green Bay";
		storySubTextBody.innerHTML = "Information here on Green Bay.";
		document.getElementById("leftArrowText").innerHTML = "Lakes in Door County 2";
		document.getElementById("rightArrowText").innerHTML = "Green Bay 1";
	} else if (storyModeControl == 16) {
		storyModeControl = 17;
		map.flyTo({
			center: [-88.01247, 44.51006],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Green Bay 1";
		storySubTextHeader.innerHTML = "Green Bay 1";
		storySubTextBody.innerHTML = "Information here on Green Bay 1.";	
		document.getElementById("leftArrowText").innerHTML = "Green Bay";
		document.getElementById("rightArrowText").innerHTML = "Green Bay 2";
	} else if (storyModeControl == 17) {
		storyModeControl = 18;
		map.flyTo({
			center: [-88.01247, 44.51006],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Green Bay 2";
		storySubTextHeader.innerHTML = "Green Bay 2";
		storySubTextBody.innerHTML = "Information here on Green Bay 2.";
		document.getElementById("rightArrow").style.visibility = "hidden";
		document.getElementById("leftArrowText").innerHTML = "Green Bay 1";
		document.getElementById("rightArrowText").innerHTML = "";
	} else {
	
	}
};


function MoveStoryModeBackward() {
	if (storyModeControl == 18) {
		storyModeControl = 17;
		map.flyTo({
			center: [-87.2341, 45.04789],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Green Bay 1";
		storySubTextHeader.innerHTML = "Green Bay 1";
		storySubTextBody.innerHTML = "Information here on Green Bay 1.";
		document.getElementById("rightArrow").style.visibility = "visible";
		document.getElementById("leftArrowText").innerHTML = "Gile Flowage";
		document.getElementById("rightArrowText").innerHTML = "Green Bay";
	} else if (storyModeControl == 17) {
		storyModeControl = 16;
		map.flyTo({
			center: [-87.2341, 45.04789],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Green Bay";
		storySubTextHeader.innerHTML = "Green Bay";
		storySubTextBody.innerHTML = "Information here on Green Bay.";
		document.getElementById("rightArrow").style.visibility = "visible";
		document.getElementById("leftArrowText").innerHTML = "Gile Flowage";
		document.getElementById("rightArrowText").innerHTML = "Green Bay";
	} else if (storyModeControl == 16) {
		storyModeControl = 15;
		map.flyTo({
			center: [-87.2341, 45.04789],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Door County 2";
		storySubTextHeader.innerHTML = "Lakes in Door County 2";
		storySubTextBody.innerHTML = "Information here on the Lakes in Door County 2.";
		document.getElementById("rightArrow").style.visibility = "visible";
		document.getElementById("leftArrowText").innerHTML = "Gile Flowage";
		document.getElementById("rightArrowText").innerHTML = "Green Bay";
	} else if (storyModeControl == 15) {
		storyModeControl = 14;
		map.flyTo({
			center: [-87.2341, 45.04789],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Door County 1";
		storySubTextHeader.innerHTML = "Lakes in Door County 1";
		storySubTextBody.innerHTML = "Information here on the Lakes in Door County 1.";
		document.getElementById("rightArrow").style.visibility = "visible";
		document.getElementById("leftArrowText").innerHTML = "Gile Flowage";
		document.getElementById("rightArrowText").innerHTML = "Green Bay";
	} else if (storyModeControl == 14) {
		storyModeControl = 13;
		map.flyTo({
			center: [-87.2341, 45.04789],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Door County";
		storySubTextHeader.innerHTML = "Lakes in Door County";
		storySubTextBody.innerHTML = "Information here on the Lakes in Door County.";
		document.getElementById("rightArrow").style.visibility = "visible";
		document.getElementById("leftArrowText").innerHTML = "Gile Flowage";
		document.getElementById("rightArrowText").innerHTML = "Green Bay";
	} else if (storyModeControl == 13) {
		storyModeControl = 12;
		map.flyTo({
			center: [-90.23016, 46.3976],
			zoom: 12,
			animate: true
		});
		storyTextHeader.innerHTML = "Gile Flowage 2";
		storySubTextHeader.innerHTML = "Gile Flowage 2";
		storySubTextBody.innerHTML = "Gile Flowage 2";
		document.getElementById("leftArrowText").innerHTML = "Lakes in Ashland County";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Door County";
	} else if (storyModeControl == 12) {
		storyModeControl = 11;
		map.flyTo({
			center: [-90.23016, 46.3976],
			zoom: 12,
			animate: true
		});
		storyTextHeader.innerHTML = "Gile Flowage 1";
		storySubTextHeader.innerHTML = "Gile Flowage 1";
		storySubTextBody.innerHTML = "Gile Flowage 1";
		document.getElementById("leftArrowText").innerHTML = "Lakes in Ashland County";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Door County";
	} else if (storyModeControl == 11) {
		storyModeControl = 10;
		map.flyTo({
			center: [-90.23016, 46.3976],
			zoom: 12,
			animate: true
		});
		storyTextHeader.innerHTML = "Gile Flowage";
		storySubTextHeader.innerHTML = "Gile Flowage";
		storySubTextBody.innerHTML = "Gile Flowage";
		document.getElementById("leftArrowText").innerHTML = "Lakes in Ashland County";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Door County";
	} else if (storyModeControl == 10) {
		storyModeControl = 9;
		map.flyTo({
			center: [-90.8785, 46.115569],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Ashland County 2";
		storySubTextHeader.innerHTML = "Lakes in Ashland County 2";
		storySubTextBody.innerHTML = "Information here on the Lakes in Ashland County 2.";
		document.getElementById("leftArrowText").innerHTML = "River at White City";
		document.getElementById("rightArrowText").innerHTML = "Gile Flowage";
	}else if (storyModeControl == 9) {
		storyModeControl = 8;
		map.flyTo({
			center: [-90.8785, 46.115569],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Ashland County 1";
		storySubTextHeader.innerHTML = "Lakes in Ashland County 1";
		storySubTextBody.innerHTML = "Information here on the Lakes in Ashland County 1.";
		document.getElementById("leftArrowText").innerHTML = "River at White City";
		document.getElementById("rightArrowText").innerHTML = "Gile Flowage";
	} else if (storyModeControl == 8) {
		storyModeControl = 7;
		map.flyTo({
			center: [-90.8785, 46.115569],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "Lakes in Ashland County";
		storySubTextHeader.innerHTML = "Lakes in Ashland County";
		storySubTextBody.innerHTML = "Information here on the Lakes in Ashland County.";
		document.getElementById("leftArrowText").innerHTML = "River at White City";
		document.getElementById("rightArrowText").innerHTML = "Gile Flowage";
	} else if (storyModeControl == 7) {
		storyModeControl = 6;
		map.flyTo({
			center: [-90.6785, 46.3181],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "River at White City 2";
		storySubTextHeader.innerHTML = "River at White City 2";
		storySubTextBody.innerHTML = "Information here on the River at White City 2.";
		document.getElementById("leftArrowText").innerHTML = "Chippewa Flowage";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Ashland County";
	} else if (storyModeControl == 6) {
		storyModeControl = 5;
		map.flyTo({
			center: [-90.6785, 46.3181],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "River at White City 1";
		storySubTextHeader.innerHTML = "River at White City 1";
		storySubTextBody.innerHTML = "Information here on the River at White City 1.";
		document.getElementById("leftArrowText").innerHTML = "Chippewa Flowage";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Ashland County";
	} else if (storyModeControl == 5) {
		storyModeControl = 4;
		map.flyTo({
			center: [-90.6785, 46.3181],
			zoom: 13,
			animate: true
		});
		storyTextHeader.innerHTML = "River at White City";
		storySubTextHeader.innerHTML = "River at White City";
		storySubTextBody.innerHTML = "Information here on the River at White City.";
		document.getElementById("leftArrowText").innerHTML = "Chippewa Flowage";
		document.getElementById("rightArrowText").innerHTML = "Lakes in Ashland County";
	} else if (storyModeControl == 4) {
		storyModeControl = 3;
		map.flyTo({
			center: [-91.872, 46.25538],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Chippewa Flowage 2";
		storySubTextHeader.innerHTML = "Chippewa Flowage 2";
		storySubTextBody.innerHTML = "Information here on the Chippewa Flowage 2.";
		document.getElementById("leftArrowText").innerHTML = "";
		document.getElementById("rightArrowText").innerHTML = "River at White City";
	} else if (storyModeControl == 3) {
		storyModeControl = 2;
		map.flyTo({
			center: [-91.872, 46.25538],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Chippewa Flowage 1";
		storySubTextHeader.innerHTML = "Chippewa Flowage 1";
		storySubTextBody.innerHTML = "Information here on the Chippewa Flowage 1.";
		document.getElementById("leftArrowText").innerHTML = "";
		document.getElementById("rightArrowText").innerHTML = "";
	} else if (storyModeControl == 2) {
		storyModeControl = 1;
		map.flyTo({
			center: [-91.872, 46.25538],
			zoom: 11,
			animate: true
		});
		storyTextHeader.innerHTML = "Chippewa Flowage";
		storySubTextHeader.innerHTML = "Chippewa Flowage";
		storySubTextBody.innerHTML = "Information here on the Chippewa Flowage.";
		document.getElementById("leftArrow").style.visibility = "hidden";
		document.getElementById("leftArrowText").innerHTML = "";
		document.getElementById("rightArrowText").innerHTML = "River at White City";
	} else if (storyModeControl == 1) {
	
	} else if (storyModeControl == 0) {
	
	}
};

