var bluScButtons = document.querySelectorAll(".blu-sc");
var dom7thButtons = document.querySelectorAll(".dom-7th");
var maj7thButtons = document.querySelectorAll(".maj-7th");
var min7thButtons = document.querySelectorAll(".min-7th");
var bluBasButtons = document.querySelectorAll(".blu-bas");
var iiviMajButtons = document.querySelectorAll(".iiviMaj");
var bluAdvButtons = document.querySelectorAll(".blu-adv");
var rtmChgButtons = document.querySelectorAll(".rtm-chg");


var topicButtons = document.querySelectorAll(".TopicButton");

var newOrder = [1,12,11,10,9,8,7,6,5,4,3,2];

const GREEN = "#6adb2e";
const ORANGE = "#fcc316";
const RED = "#e00d0d";

// resetColors();

var greenCounter = 0;
var orangeCounter = 0;
var redCounter = 0;

// Blues Scales
for(var i=0; i<bluScButtons.length; i++){
	bluScButtons[i].style.backgroundColor = whatColor(localStorage.getItem("bluesSc"+newOrder[i]));
	if(whatColor(localStorage.getItem("bluesSc"+newOrder[i]))=="#6adb2e"){
		greenCounter++;
	} else if(whatColor(localStorage.getItem("bluesSc"+newOrder[i]))=="#fcc316"){
		orangeCounter++;
	} else if(whatColor(localStorage.getItem("bluesSc"+newOrder[i]))=="#e00d0d"){
		redCounter++;
	}
	if(greenCounter+orangeCounter+redCounter==12){
		if(redCounter>4){
			localStorage.main0Col = "#e00d0d";
			localStorage.main0Date = new Date();
		} else if(orangeCounter>=4){
			localStorage.main0Col = "#fcc316";
			localStorage.main0Date = new Date();
		} else {
			localStorage.main0Col = "#6adb2e";
			localStorage.main0Date = new Date();
		}
	}
}
// DOM 7THS
for(var i=0; i<dom7thButtons.length; i++){
	dom7thButtons[i].style.backgroundColor = whatColor(localStorage.getItem("dom7Sc"+newOrder[i]));
	if(whatColor(localStorage.getItem("dom7Sc"+newOrder[i]))=="#6adb2e"){
		greenCounter++;
	} else if(whatColor(localStorage.getItem("dom7Sc"+newOrder[i]))=="#fcc316"){
		orangeCounter++;
	} else if(whatColor(localStorage.getItem("dom7Sc"+newOrder[i]))=="#e00d0d"){
		redCounter++;
	}
	if(greenCounter+orangeCounter+redCounter==12){
		if(redCounter>4){
			localStorage.main1Col = "#e00d0d";
			localStorage.main1Date = new Date();
		} else if(orangeCounter>=4){
			localStorage.main1Col = "#fcc316";
			localStorage.main1Date = new Date();
		} else {
			localStorage.main1Col = "#6adb2e";
			localStorage.main1Date = new Date();
		}
	}
}
// BASIC BLUES
for(var i=0; i<bluBasButtons.length; i++){
	bluBasButtons[i].style.backgroundColor = whatColor(localStorage.getItem("bluesBas"+newOrder[i]));
	if(whatColor(localStorage.getItem("bluesBas"+newOrder[i]))=="#6adb2e"){
		greenCounter++;
	} else if(whatColor(localStorage.getItem("bluesBas"+newOrder[i]))=="#fcc316"){
		orangeCounter++;
	} else if(whatColor(localStorage.getItem("bluesBas"+newOrder[i]))=="#e00d0d"){
		redCounter++;
	}
	if(greenCounter+orangeCounter+redCounter==12){
		if(redCounter>4){
			localStorage.main2Col = "#e00d0d";
			localStorage.main2Date = new Date();
		} else if(orangeCounter>=4){
			localStorage.main2Col = "#fcc316";
			localStorage.main2Date = new Date();
		} else {
			localStorage.main2Col = "#6adb2e";
			localStorage.main2Date = new Date();
		}
	}
}
// MAJ 7THS
for(var i=0; i<maj7thButtons.length; i++){
	maj7thButtons[i].style.backgroundColor = whatColor(localStorage.getItem("maj7Sc"+newOrder[i]));
	if(whatColor(localStorage.getItem("maj7Sc"+newOrder[i]))=="#6adb2e"){
		greenCounter++;
	} else if(whatColor(localStorage.getItem("maj7Sc"+newOrder[i]))=="#fcc316"){
		orangeCounter++;
	} else if(whatColor(localStorage.getItem("maj7Sc"+newOrder[i]))=="#e00d0d"){
		redCounter++;
	}
	if(greenCounter+orangeCounter+redCounter==12){
		if(redCounter>4){
			localStorage.main3Col = "#e00d0d";
			localStorage.main3Date = new Date();
		} else if(orangeCounter>=4){
			localStorage.main3Col = "#fcc316";
			localStorage.main3Date = new Date();
		} else {
			localStorage.main3Col = "#6adb2e";
			localStorage.main3Date = new Date();
		}
	}
}
// MIN 7THS
for(var i=0; i<min7thButtons.length; i++){
	min7thButtons[i].style.backgroundColor = whatColor(localStorage.getItem("min7Sc"+newOrder[i]));
	if(whatColor(localStorage.getItem("min7Sc"+newOrder[i]))=="#6adb2e"){
		greenCounter++;
	} else if(whatColor(localStorage.getItem("min7Sc"+newOrder[i]))=="#fcc316"){
		orangeCounter++;
	} else if(whatColor(localStorage.getItem("min7Sc"+newOrder[i]))=="#e00d0d"){
		redCounter++;
	}
	if(greenCounter+orangeCounter+redCounter==12){
		if(redCounter>4){
			localStorage.main4Col = "#e00d0d";
			localStorage.main4Date = new Date();
		} else if(orangeCounter>=4){
			localStorage.main4Col = "#fcc316";
			localStorage.main4Date = new Date();
		} else {
			localStorage.main4Col = "#6adb2e";
			localStorage.main4Date = new Date();
		}
	}
}
// ii-V7-I
for(var i=0; i<iiviMajButtons.length; i++){
	iiviMajButtons[i].style.backgroundColor = whatColor(localStorage.getItem("iiviMaj"+newOrder[i]));
	if(whatColor(localStorage.getItem("iiviMaj"+newOrder[i]))=="#6adb2e"){
		greenCounter++;
	} else if(whatColor(localStorage.getItem("iiviMaj"+newOrder[i]))=="#fcc316"){
		orangeCounter++;
	} else if(whatColor(localStorage.getItem("iiviMaj"+newOrder[i]))=="#e00d0d"){
		redCounter++;
	}
	if(greenCounter+orangeCounter+redCounter==12){
		if(redCounter>4){
			localStorage.main5Col = "#e00d0d";
			localStorage.main5Date = new Date();
		} else if(orangeCounter>=4){
			localStorage.main5Col = "#fcc316";
			localStorage.main5Date = new Date();
		} else {
			localStorage.main5Col = "#6adb2e";
			localStorage.main5Date = new Date();
		}
	}
}

// Advanced Blues
for(var i=0; i<bluAdvButtons.length; i++){
	bluAdvButtons[i].style.backgroundColor = whatColor(localStorage.getItem("bluesAdv"+newOrder[i]));
	if(whatColor(localStorage.getItem("bluesAdv"+newOrder[i]))=="#6adb2e"){
		greenCounter++;
	} else if(whatColor(localStorage.getItem("bluesAdv"+newOrder[i]))=="#fcc316"){
		orangeCounter++;
	} else if(whatColor(localStorage.getItem("bluesAdv"+newOrder[i]))=="#e00d0d"){
		redCounter++;
	}
	if(greenCounter+orangeCounter+redCounter==12){
		if(redCounter>4){
			localStorage.main8Col = "#e00d0d";
			localStorage.main8Date = new Date();
		} else if(orangeCounter>=4){
			localStorage.main8Col = "#fcc316";
			localStorage.main8Date = new Date();
		} else {
			localStorage.main8Col = "#6adb2e";
			localStorage.main8Date = new Date();
		}
	}
}

// Rhythm Changes
for(var i=0; i<rtmChgButtons.length; i++){
	rtmChgButtons[i].style.backgroundColor = whatColor(localStorage.getItem("rtmChg"+newOrder[i]));
	if(whatColor(localStorage.getItem("rtmChg"+newOrder[i]))=="#6adb2e"){
		greenCounter++;
	} else if(whatColor(localStorage.getItem("rtmChg"+newOrder[i]))=="#fcc316"){
		orangeCounter++;
	} else if(whatColor(localStorage.getItem("rtmChg"+newOrder[i]))=="#e00d0d"){
		redCounter++;
	}
	if(greenCounter+orangeCounter+redCounter==12){
		if(redCounter>4){
			localStorage.main9Col = "#e00d0d";
			localStorage.main9Date = new Date();
		} else if(orangeCounter>=4){
			localStorage.main9Col = "#fcc316";
			localStorage.main9Date = new Date();
		} else {
			localStorage.main9Col = "#6adb2e";
			localStorage.main9Date = new Date();
		}
	}
}

// TOPIC BUTTONS
for(var i=0;i<topicButtons.length;i++){
	topicButtons[i].style.backgroundColor = whatTopicColor(localStorage.getItem("main"+i+"Col"),
		localStorage.getItem("main"+i+"Date"));
}





// console.log(greenCounter);
// console.log(orangeCounter);
// console.log(redCounter);



const MSTODAYS = 86400000;

function whatColor(res) {
	var d = new Date();
	if(res==null){
		return;
	} else{
		res = new Date(res);
		if(((d.getTime() - res.getTime())/86400000) <= 7){
			return "#6adb2e"; //green
		} else if (((d.getTime() - res.getTime())/86400000) <= 14){
			return "#fcc316"; //orange
		} else if (((d.getTime() - res.getTime())/86400000) > 14){
			return "#e00d0d"; //red
		} else {
			return;
		}
	}
}

function whatTopicColor(colorNow,time){
	var d = new Date();
	if(time==null){
		return;
	} else {
		time = new Date(time);
		if(colorNow==RED){
			return RED;
		} else if(colorNow==ORANGE){
			if(((d.getTime()-time.getTime())/86400000)<=14){
				return ORANGE;
			} else {
				return RED;
			}
		} else {
			if(((d.getTime()-time.getTime())/86400000)<=7){
				return GREEN;
			} else if(((d.getTime()-time.getTime())/86400000)<=14){
				return ORANGE;
			} else {
				return RED;
			}
		}
	}
}

function resetColors(){
	for(var i=0;i<12;i++){
		localStorage.removeItem("bluesSc"+i);
		localStorage.removeItem("dom7Sc"+i);
		localStorage.removeItem("maj7Sc"+i);
		localStorage.removeItem("min7Sc"+i);
		localStorage.removeItem("bluesBas"+i);
		localStorage.removeItem("bluesAdv"+i);
		localStorage.removeItem("rtmChg"+i);
		localStorage.removeItem("main"+i+"Col");
		localStorage.removeItem("main"+i+"Date");
	}
}