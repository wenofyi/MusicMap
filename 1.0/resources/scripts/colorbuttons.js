var bluScButtons = document.querySelectorAll(".blu-sc");
var bluScMain = document.querySelector("#blu-sc");
var dom7thButtons = document.querySelectorAll(".dom-7th");
var dom7thMain = document.querySelector("#dom-7th");

var topicButtons = document.querySelectorAll(".TopicButton");

const GREEN = "#6adb2e";
const ORANGE = "#fcc316";
const RED = "#e00d0d";

// resetColors();

var greenCounter = 0;
var orangeCounter = 0;
var redCounter = 0;

for(var i=0; i<bluScButtons.length; i++){
	bluScButtons[i].style.backgroundColor = whatColor(localStorage.getItem("bluesSc"+i));
	if(whatColor(localStorage.getItem("bluesSc"+i))=="#6adb2e"){
		greenCounter++;
	} else if(whatColor(localStorage.getItem("bluesSc"+i))=="#fcc316"){
		orangeCounter++;
	} else if(whatColor(localStorage.getItem("bluesSc"+i))=="#e00d0d"){
		redCounter++;
	}
	// greenCounter++;
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
	// bluScButtons[i].style.backgroundColor = GREEN;
}

for(var i=0;i<11;i++){
	topicButtons[i].style.backgroundColor = whatTopicColor(localStorage.getItem("main"+i+"Col"),
		localStorage.getItem("main"+i+"Date"));
}



for(var i=0; i<dom7thButtons.length; i++){
	dom7thButtons[i].style.backgroundColor = whatColor(localStorage.getItem("dom7Sc"+i));
	if(whatColor(localStorage.getItem("dom7Sc"+i))=="#6adb2e"){
		greenCounter++;
	} else if(whatColor(localStorage.getItem("dom7Sc"+i))=="#fcc316"){
		orangeCounter++;
	} else if(whatColor(localStorage.getItem("dom7Sc"+i))=="#e00d0d"){
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
		localStorage.removeItem("main"+i+"Col");
		localStorage.removeItem("main"+i+"Date");
	}
}