// **************NOTES AND SCALES**************

var sharps = [
{note:"c/4", freq:"C"},
{note:"c#/4", freq:"C#"},
{note:"d/4", freq:"D"},
{note:"d#/4", freq:"D#"},
{note:"e/4", freq:"E"},
{note:"f/4", freq:"F"},
{note:"f#/4", freq:"F#"},
{note:"g/4", freq:"G"},
{note:"g#/4", freq:"G#"},
{note:"a/4", freq:"A"},
{note:"a#/4", freq:"A#"},
{note:"b/4", freq:"B"},
{note:"c/5", freq:"C"},
{note:"c#/5", freq:"C#"},
{note:"d/5", freq:"D"},
{note:"d#/5", freq:"D#"},
{note:"e/5", freq:"E"},
{note:"f/5", freq:"F"},
{note:"f#/5", freq:"F#"},
{note:"g/5", freq:"G"},
{note:"g#/5", freq:"G#"},
{note:"a/5", freq:"A"},
{note:"a#/5", freq:"A#"},
{note:"b/5", freq:"B"},
]

// Keys
var keySigMaj = ["C","G","D","A","E","B","F#","Db","Ab","Eb","Bb","F"];
var keySigMin = ["Am","Em","Bm","F#m","C#m","G#m","D#m","Bbm","Fm","Cm","Gm","Dm"];

// Types of scales - called by scaleType
var bluesSc = [1,4,6,7,8,11,13,11,8,7,6,4,1];
var dom7 = [1,5,8,11,8,5,1];
var dom7Sc = [1,3,5,6,8,10,11,13,11,10,8,6,5,3,1];
var maj7 = [1,5,8,12,8,5,1];
var maj7Sc = [1,3,5,7,8,10,12,13,12,10,8,7,5,3,1];
var min7 = [1,4,8,11,8,4,1];
var min7Sc = [1,3,4,6,8,10,11,13,11,10,8,6,4,3,1];


// scaleType and scaleKey are invisible divs on the html page to determine which scale gets printed
var scaleType = document.getElementsByClassName("scaleType")[0].childNodes[0].nodeValue;
var tonality;
if(scaleType == "bluesSc"||
	scaleType == "min7"||
	scaleType == "min7Sc"){
	tonality = "min";
} else{
	tonality = "maj";
}
switch(scaleType){
	case "bluesSc":
		scaleType = bluesSc;
		break;
	case "dom7":
		scaleType = dom7;
		break;
	case "dom7Sc":
		scaleType = dom7Sc;
		break;
	case "maj7":
		scaleType = maj7;
		break;
	case "maj7Sc":
		scaleType = maj7Sc;
		break;
	case "min7":
		scaleType = min7;
		break;
	case "min7Sc":
		scaleType = min7Sc;
		break;
	default:
		alert("Scale type not found");
}

var scaleKey = document.getElementsByClassName("scaleKey")[0].childNodes[0].nodeValue;
var offset;
if(tonality == "maj"){
	offset = ((scaleKey-1)*7)%12;
	keySig = keySigMaj[scaleKey-1];
} else {
	offset = ((scaleKey-1)*7+9)%12;
	keySig = keySigMin[scaleKey-1];
}
offset--;


// ********************* PITCH DETECTION ********************

var currentNote = 0;
var correctNote = false; // Changes to true when a correct note is played
var testCount = 0; // Repeats out of 3
var wrongNoteCount = 0;
var wrongNoteThreshold = 200;
var tickCount = 0; // Number of correct repeats out of 3
var retakeCount = 0; // Number of repeats of the test. Two wrong tests = go back to practice.

var myInterval = setInterval(testNotes, 100);

function testNotes() {
	if (currentNote>=scaleType.length){
		testCount++;
		console.log(testCount);
		if(testCount==1){
			roundOne();
		} else if (testCount==2){
			roundTwo();
		} else if (testCount==3){
			completeTest();
		}
		currentNote = 0;
		wrongNoteCount = 0;
	} else if(((document.getElementById("note").childNodes[0].nodeValue)==
		(sharps[scaleType[currentNote]+offset].freq))||correctNote) {
			correctNote = true;
			//wait for document.getElementById("note").childNodes[0].nodeValue to change
			if((document.getElementById("note").childNodes[0].nodeValue)==
				(sharps[scaleType[currentNote]+offset].freq)) {
					setTimeout(testNotes,50);
					return;
			} else {
			correctNote = false;
			currentNote++;
			}
	} else if (((document.getElementById("note").childNodes[0].nodeValue)!="--")&&
					((document.getElementById("note").childNodes[0].nodeValue)!="-")) {
		wrongNoteCount++;
		console.log("Wrong Notes: "+wrongNoteCount+" "+sharps[scaleType[currentNote]+offset].freq);
	}
}

function roundOne() {
	if(wrongNoteCount > wrongNoteThreshold){
		document.getElementById("CheckBox1").innerHTML = "<span class='Cross'>&#10008;</span>";
	} else {
		document.getElementById("CheckBox1").innerHTML = "<span class='Check'>&#10004;</span>";
		tickCount++;
	}
	document.getElementsByClassName("Instructions").innerHTML = "Keep going!";
}

function roundTwo() {
	if(wrongNoteCount > wrongNoteThreshold){
		document.getElementById("CheckBox2").innerHTML = "<span class='Cross'>&#10008;</span>";
	} else {
		document.getElementById("CheckBox2").innerHTML = "<span class='Check'>&#10004;</span>";
		tickCount++;
	}
	document.getElementsByClassName("Instructions").innerHTML = "One more to go!";
}

function completeTest() {
	if(wrongNoteCount > wrongNoteThreshold){
		document.getElementById("CheckBox3").innerHTML = "<span class='Cross'>&#10008;</span>";
	} else {
		document.getElementById("CheckBox3").innerHTML = "<span class='Check'>&#10004;</span>";
		tickCount++;
	}

	if(tickCount==3){
		var nextPage = document.getElementsByClassName("nextPage")[0].childNodes[0].nodeValue;
		if((nextPage=="dom-7ths.html")||(nextPage=="maj-7ths.html")||(nextPage=="min-7ths.html")||
			(nextPage=="dim-7ths.html")||(nextPage=="aug-7ths.html")){
			localStorage.setItem(document.getElementsByClassName("scaleType")[0].childNodes[0].nodeValue+
				(scaleKey),new Date());
		}
		clearInterval(myInterval);
		alert("Great job!");
		window.location.href = nextPage;
	} else if (retakeCount==1){
		var prevPage = document.getElementsByClassName("prevPage")[0].childNodes[0].nodeValue;
		alert("Let's go back and practice that again.");
		window.location.href = prevPage;
	} else {
		alert("Try again.");
		document.getElementById("CheckBox1").innerHTML = "";
		document.getElementById("CheckBox2").innerHTML = "";
		document.getElementById("CheckBox3").innerHTML = "";
		retakeCount++;
		testCount = 0;
		tickCount = 0;
	}
}










