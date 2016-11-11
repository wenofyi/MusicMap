var dom7s = ["C7","Db7","D7","Eb7","E7","F7","F#7","G7","Ab7","A7","Bb7","B7"];

var bluesBas = [0,5,0,0,5,5,0,0,7,5,0,7];

var progType = document.querySelectorAll(".progType")[0].childNodes[0].nodeValue;
var scaleKey = document.querySelectorAll(".scaleKey")[0].childNodes[0].nodeValue;
var numBars;

switch(progType){
	case "bluesSc":
		numBars = 12;
		tonality = "min";
		break;
	case "bluesBas":
		numBars = 12;
		tonality = "maj";
		break;
	case "iivi":
		numBars = 4;
		tonality = "maj";
		break;
	case "advBlues":
		numBars = 12;
		tonality = "maj";
		break;
	case "rhythm":
		numBars = 32;
		tonality = "maj";
		break;
	default:
		alert("Progression type not found");
}

var offset;
if(tonality == "maj"){
	offset = ((scaleKey-1)*7)%12;
} else {
	offset = ((scaleKey-1)*7+9)%12;
}

for(var i=0;i<numBars;i++){
	document.querySelector("#voicing"+(i+1)).innerHTML = dom7s[(bluesBas[i]+offset)%12];
}