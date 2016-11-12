// scaleType and scaleKey are invisible divs on the html page to determine which scale gets printed
var progType = document.getElementsByClassName("progType")[0].childNodes[0].nodeValue;
var numBars;
var tempo;
var repeatsMax;

switch(progType){
	case "bluesSc":
		numBars = 12;
		tonality = "min";
		tempo = 100;
		repeatsMax = 2;
		break;
	case "bluesBas":
		numBars = 12;
		tonality = "min";
		tempo = 100;
		repeatsMax = 2;
		break;
	case "iiviMaj":
		numBars = 12;
		tonality = "maj";
		tempo = 88;
		repeatsMax = 0;
		break;
	case "iiviMin":
		numBars = 12;
		tonality = "min";
		break;
	case "advBlues":
		numBars = 12;
		tonality = "min";
		break;
	case "rhythm":
		numBars = 32;
		tonality = "maj";
		break;
	default:
		alert("Progression type not found");
}

// Keys
var keySigMaj = ["C","G","D","A","E","B","F#","Db","Ab","Eb","Bb","F"];
var keySigMin = ["Am","Em","Bm","F#m","C#m","G#m","D#m","Bbm","Fm","Cm","Gm","Dm"];

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


// **************STAVE AND NOTE GENERATION**************


VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "progImg".
var div = document.getElementById("progImg")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(800, 300);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");


var staveX = 40;
var staveY = 0;
var staveWidth = 180;

// Create a stave of width 780 at position 50, 40 on the canvas.
var stave = new VF.Stave(staveX, staveY, staveWidth);

// Add a clef.
stave.addClef("treble").addTimeSignature("4/4");
// Add a key signature.
stave.addKeySignature(keySig);


// Connect it to the rendering context and draw!
stave.setContext(context).draw();

var staves = [];

for(i=1;i<numBars;i++){
	if(i<4){
		staves[i] = new VF.Stave(staveX+i*staveWidth,staveY,staveWidth);
		staves[i].setContext(context).draw();
	}
	if(i>=4 && i<8){
		staves[i] = new VF.Stave(staveX+(i-4)*staveWidth,staveY+100,staveWidth);
		staves[i].setContext(context).draw();
	}
	if(i>=8 && i<12){
		staves[i] = new VF.Stave(staveX+(i-8)*staveWidth,staveY+200,staveWidth);
		staves[i].setContext(context).draw();
	}
}


window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = null;
var isPlaying = false;

window.onload = function() {
	audioContext = new AudioContext();
	MAX_SIZE = Math.max(4,Math.floor(audioContext.sampleRate/5000));	// corresponds to a 5kHz signal
	var request = new XMLHttpRequest();
	var soundFile = document.getElementsByClassName("soundFile")[0].childNodes[0].nodeValue;
	request.open("GET", soundFile, true);
	request.responseType = "arraybuffer";
	request.onload = function() {
	  audioContext.decodeAudioData( request.response, function(buffer) { 
	    	theBuffer = buffer;
		} );
	}
	request.send();
	setTimeout(function readyButton() {document.getElementsByClassName("GoButton")[0].innerHTML = 
		"Click to start";},2000);
}

function togglePlayback() {
    if (isPlaying) {
        //stop playing and return
        sourceNode.stop( 0 );
        sourceNode = null;
        analyser = null;
        isPlaying = false;
        return "start";
    }

    sourceNode = audioContext.createBufferSource();
    sourceNode.buffer = theBuffer;
    sourceNode.loop = false;

    sourceNode.connect( audioContext.destination );
    sourceNode.start( 0 );
    isPlaying = true;

    var intervalTiming = (1/(tempo/60))*1000;
    var countIn = (60/tempo)*8000;
    setTimeout(function startCursor() {setInterval(highlightBars,intervalTiming);},countIn);
	    
    return "stop";
}

var startX = 40;
var startY = 70;
var limitX = 740;
var distX = limitX-startX;

var posX = startX;
var posY = startY;

var incX = distX/15;
var lineInc = 0;
var repeats = 0;
var cursor = document.getElementsByClassName("movingBar")[0];

function highlightBars(){
	if((posX+incX)<limitX){
		posX+=incX;
		cursor.style.left=posX+"px";
	}
	else if (lineInc==2){
		if(repeats==repeatsMax){
			completeImprov();
			clearInterval();
		} else {
			repeats++;
			lineInc = 0;
			posX = 40;
			posY = 70;
			cursor.style.left=posX+"px";
			cursor.style.top=posY+"px";
		}
	}
	else{
		posX = 40;
		posY+=100;
		cursor.style.left=posX+"px";
		cursor.style.top=posY+"px";
		lineInc++;
	}
}


// Keys
var keySigMaj = ["C","G","D","A","E","B","Fs","Db","Ab","Eb","Bb","F"];
var keySigMin = ["Am","Em","Bm","F#m","C#m","G#m","D#m","Bbm","Fm","Cm","Gm","Dm"];


function completeImprov() {
	var nextPage = document.getElementsByClassName("nextPage")[0].childNodes[0].nodeValue;
	localStorage.setItem(progType+(scaleKey-1),new Date());
	alert("Great job!");
	window.location.href = nextPage;
}