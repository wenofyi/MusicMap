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

var flats = [
{note:"c/4", freq:261.63},
{note:"db/4", freq:277.18},
{note:"d/4", freq:293.66},
{note:"eb/4", freq:311.13},
{note:"e/4", freq:329.63},
{note:"f/4", freq:349.23},
{note:"gb/4", freq:369.99},
{note:"g/4", freq:392.00},
{note:"ab/4", freq:415.30},
{note:"a/4", freq:440.00},
{note:"bb/4", freq:466.16},
{note:"b/4", freq:493.88},
{note:"c/5", freq:523.25},
{note:"db/5", freq:554.37},
{note:"d/5", freq:587.33},
{note:"eb/5", freq:622.25},
{note:"e/5", freq:659.25},
{note:"f/5", freq:698.46},
{note:"gb/5", freq:739.99},
{note:"g/5", freq:783.99},
{note:"ab/5", freq:830.61},
{note:"a/5", freq:880.00},
{note:"bb/5", freq:932.33},
{note:"b/5", freq:987.77},
]

var moreSharps = [
{note:"b#/3", freq:261.63},
{note:"c#/4", freq:277.18},
{note:"d/4", freq:293.66},
{note:"d#/4", freq:311.13},
{note:"e/4", freq:329.63},
{note:"e#/4", freq:349.23},
{note:"f#/4", freq:369.99},
{note:"g/4", freq:392.00},
{note:"g#/4", freq:415.30},
{note:"a/4", freq:440.00},
{note:"a#/4", freq:466.16},
{note:"b/4", freq:493.88},
{note:"b#/4", freq:523.25},
{note:"c#/5", freq:554.37},
{note:"d/5", freq:587.33},
{note:"d#/5", freq:622.25},
{note:"e/5", freq:659.25},
{note:"e#/5", freq:698.46},
{note:"f#/5", freq:739.99},
{note:"g/5", freq:783.99},
{note:"g#/5", freq:830.61},
{note:"a/5", freq:880.00},
{note:"a#/5", freq:932.33},
{note:"b/5", freq:987.77},
]

var moreFlats = [
{note:"c/4", freq:261.63},
{note:"db/4", freq:277.18},
{note:"d/4", freq:293.66},
{note:"eb/4", freq:311.13},
{note:"fb/4", freq:329.63},
{note:"f/4", freq:349.23},
{note:"gb/4", freq:369.99},
{note:"g/4", freq:392.00},
{note:"ab/4", freq:415.30},
{note:"a/4", freq:440.00},
{note:"bb/4", freq:466.16},
{note:"cb/5", freq:493.88},
{note:"c/5", freq:523.25},
{note:"db/5", freq:554.37},
{note:"d/5", freq:587.33},
{note:"eb/5", freq:622.25},
{note:"fb/5", freq:659.25},
{note:"f/5", freq:698.46},
{note:"gb/5", freq:739.99},
{note:"g/5", freq:783.99},
{note:"ab/5", freq:830.61},
{note:"a/5", freq:880.00},
{note:"bb/5", freq:932.33},
{note:"cb/6", freq:987.77},
]
// Keys
var keySigMaj = ["C","G","D","A","E","B","F#","Db","Ab","Eb","Bb","F"];
var keySigMin = ["Am","Em","Bm","F#m","C#m","G#m","D#m","Bbm","Fm","Cm","Gm","Dm"];

// Types of scales - called by scaleType
var bluesSc = [
{deg:1, acc:false},
{deg:4, acc:false},
{deg:6, acc:false},
{deg:7, acc:true},
{deg:8, acc:false},
{deg:11, acc:false},
{deg:13, acc:false},
{deg:11, acc:false},
{deg:8, acc:false},
{deg:7, acc:true},
{deg:6, acc:false},
{deg:4, acc:false},
{deg:1, acc:false}
];
var dom7 = [
{deg:1, acc:false},
{deg:5, acc:false},
{deg:8, acc:false},
{deg:11, acc:"lower"},
{deg:8, acc:false},
{deg:5, acc:false},
{deg:1, acc:false}
];
var dom7Sc = [
{deg:1, acc:false},
{deg:3, acc:false},
{deg:5, acc:false},
{deg:6, acc:false},
{deg:8, acc:false},
{deg:10, acc:false},
{deg:11, acc:"lower"},
{deg:13, acc:false},
{deg:11, acc:"lower"},
{deg:10, acc:false},
{deg:8, acc:false},
{deg:6, acc:false},
{deg:5, acc:false},
{deg:3, acc:false},
{deg:1, acc:false}
];
var maj7 = [
{deg:1, acc:false},
{deg:5, acc:false},
{deg:8, acc:false},
{deg:12, acc:false},
{deg:8, acc:false},
{deg:5, acc:false},
{deg:1, acc:false}
];
var maj7Sc = [
{deg:1, acc:false},
{deg:3, acc:false},
{deg:5, acc:false},
{deg:7, acc:"raise"},
{deg:8, acc:false},
{deg:10, acc:false},
{deg:12, acc:false},
{deg:13, acc:false},
{deg:12, acc:false},
{deg:10, acc:false},
{deg:8, acc:false},
{deg:7, acc:"raise"},
{deg:5, acc:false},
{deg:3, acc:false},
{deg:1, acc:false}
];
var min7 = [
{deg:1, acc:false},
{deg:4, acc:false},
{deg:8, acc:false},
{deg:11, acc:false},
{deg:8, acc:false},
{deg:4, acc:false},
{deg:1, acc:false}
];
var min7Sc = [
{deg:1, acc:false},
{deg:3, acc:false},
{deg:4, acc:false},
{deg:6, acc:false},
{deg:8, acc:false},
{deg:10, acc:"raise"},
{deg:11, acc:false},
{deg:13, acc:false},
{deg:11, acc:false},
{deg:10, acc:"raise"},
{deg:8, acc:false},
{deg:6, acc:false},
{deg:4, acc:false},
{deg:3, acc:false},
{deg:1, acc:false}
];


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

// alert(offset);

// **************STAVE AND NOTE GENERATION**************

// Check for lydian scales
function isLydian(array) {
	if(array[3].deg == 7){
		if(array.length==15){
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function isDorian(array){
	if(array[2].deg == 4){
		if(array.length==15){
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function isDom7(array){
	if((array.length==7)&&(array[1].deg==5)&&(array[3].deg==11)){
		return true;
	} else if ((array.length==15)&&(array[2].deg==5)&&(array[6].deg==11)) {
		return true;
	} else {
		return false;
	}
}

// document.getElementById("test").innerHTML = isDom7(scaleType);


// Add notes to array for printing to stave
function printScale() {
	// KEYS WITH FLATS INCL. Cb AND Fb
	if((scaleKey==8)&&(isDom7(scaleType))){
		for(var i=0;i<scaleType.length;i++){
			if(i<((scaleType.length-1)/2)){			//ascending
				if(scaleType[i].acc){
					// previous note has same note letter
					if(moreFlats[scaleType[i].deg+offset].note[0]==moreFlats[scaleType[i-1].deg+offset].note[0]){
						notes[i] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
					// next note has same note letter
					} else if(moreFlats[scaleType[i].deg+offset].note[0]==moreFlats[scaleType[i+1].deg+offset].note[0]){
						notes[i] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("b"));
						notes[i+1] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
						i++;
					} else if(scaleType[i].acc=="raise"){
						notes[i] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
					} else if(scaleType[i].acc=="lower"){
						notes[i] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("b"));
					}
				} else {
					notes[i] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" });
				}
			} else if(i>((scaleType.length-1)/2)){	//descending
				// previous note has same note letter
				if(moreFlats[scaleType[i].deg+offset].note[0]==moreFlats[scaleType[i-1].deg+offset].note[0]){
					notes[i] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("b"));
				} else {
					notes[i] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" });
				}
			} else {								//note at the top of the scale
				if(scaleType[i].acc=="raise"){
					notes[i] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" })
						.addAccidental(0, new VF.Accidental("n"));
				} else if(scaleType[i].acc=="lower"){
					notes[i] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" })
						.addAccidental(0, new VF.Accidental("b"));
				} else {
					notes[i] = new VF.StaveNote({ keys: [moreFlats[scaleType[i].deg+offset].note], duration: "w" });
				}
			}
		}
	}

	// KEYS WITH FLATS
	else if((scaleKey > 7)||((scaleKey==1)&&(isDom7(scaleType)))){

		for(var i=0;i<scaleType.length;i++){
			if(i<((scaleType.length-1)/2)){			//ascending
				if(scaleType[i].acc){
					// previous note has same note letter
					if(flats[scaleType[i].deg+offset].note[0]==flats[scaleType[i-1].deg+offset].note[0]){
						notes[i] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
					// next note has same note letter
					} else if(flats[scaleType[i].deg+offset].note[0]==flats[scaleType[i+1].deg+offset].note[0]){
						notes[i] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("b"));
						notes[i+1] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
						i++;
					} else if(scaleType[i].acc=="raise"){
						notes[i] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
					} else if(scaleType[i].acc=="lower"){
						notes[i] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("b"));
					}
				} else {
					notes[i] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" });
				}
			} else if(i>((scaleType.length-1)/2)){	//descending
				// previous note has same note letter
				if(flats[scaleType[i].deg+offset].note[0]==flats[scaleType[i-1].deg+offset].note[0]){
					notes[i] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("b"));
				} else {
					notes[i] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" });
				}
			} else {								//note at the top of the scale
				if(scaleType[i].acc=="raise"){
					notes[i] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" })
						.addAccidental(0, new VF.Accidental("n"));
				} else if(scaleType[i].acc=="lower"){
					notes[i] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" })
						.addAccidental(0, new VF.Accidental("b"));
				} else {
					notes[i] = new VF.StaveNote({ keys: [flats[scaleType[i].deg+offset].note], duration: "w" });
				}
			}
		}
	}

	// KEYS WITH SHARPS INCL. E# AND B#
	else if((scaleKey==7) || ((scaleKey==6)&&(isLydian(scaleType))) ||
		((scaleKey==6)&&(isDorian(scaleType)))) {

		for(var i=0;i<scaleType.length;i++){
			if(i<((scaleType.length-1)/2)){			//ascending
				if(scaleType[i].acc){
					// previous note has same note letter
					if(moreSharps[scaleType[i].deg+offset].note[0]==moreSharps[scaleType[i-1].deg+offset].note[0]){
						notes[i] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("#"));
					// next note has same note letter
					} else if(moreSharps[scaleType[i].deg+offset].note[0]==moreSharps[scaleType[i+1].deg+offset].note[0]){
						notes[i] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
						notes[i+1] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("#"));
						i++;
					} else if(scaleType[i].acc=="raise"){
						notes[i] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("#"));
					} else if(scaleType[i].acc=="lower"){
						notes[i] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
					}
				} else {
					notes[i] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" });
				}
			} else if(i>((scaleType.length-1)/2)){	//descending
				// previous note has same note letter
				if(moreSharps[scaleType[i].deg+offset].note[0]==moreSharps[scaleType[i-1].deg+offset].note[0]){
					notes[i] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
				} else {
					notes[i] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" });
				}
			} else {								//note at the top of the scale
				if(scaleType[i].acc=="raise"){
					notes[i] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" })
						.addAccidental(0, new VF.Accidental("#"));
				} else if(scaleType[i].acc=="lower"){
					notes[i] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" })
						.addAccidental(0, new VF.Accidental("n"));
				} else {
					notes[i] = new VF.StaveNote({ keys: [moreSharps[scaleType[i].deg+offset].note], duration: "w" });
				}
			}
		}
	}

	// KEYS WITH SHARPS
	else {
		
		for(var i=0;i<scaleType.length;i++){
			if(i<((scaleType.length-1)/2)){			//ascending
				if(scaleType[i].acc){
					// previous note has same note letter
					if(sharps[scaleType[i].deg+offset].note[0]==sharps[scaleType[i-1].deg+offset].note[0]){
						notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("#"));
					// next note has same note letter
					} else if(sharps[scaleType[i].deg+offset].note[0]==sharps[scaleType[i+1].deg+offset].note[0]){
						notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
						notes[i+1] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("#"));
						i++;
					} else if(scaleType[i].acc=="raise"){
						notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("#"));
					} else if(scaleType[i].acc=="lower"){
						notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
					}
				} else {
					notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" });
				}
			} else if(i>((scaleType.length-1)/2)){	//descending
				// previous note has same note letter
				if(sharps[scaleType[i].deg+offset].note[0]==sharps[scaleType[i-1].deg+offset].note[0]){
					notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" })
							.addAccidental(0, new VF.Accidental("n"));
				} else {
					notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" });
				}
			} else {								//note at the top of the scale
				if(scaleType[i].acc=="raise"){
					notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" })
						.addAccidental(0, new VF.Accidental("#"));
				} else if(scaleType[i].acc=="lower"){
					notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" })
						.addAccidental(0, new VF.Accidental("n"));
				} else {
					notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" });
				}
			}
		}




		// for(var i=0;i<scaleType.length;i++){
		// 	if((sharps[scaleType[i].deg+offset].note.indexOf("#") > -1)&&(scaleType[i].acc)){
		// 		notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" })
		// 			.addAccidental(0, new VF.Accidental("#"));
		// 	} else if((i>0)&&(sharps[scaleType[i].deg+offset].note[0]==sharps[scaleType[i-1].deg+offset].note[0])){
		// 		notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" })
		// 			.addAccidental(0, new VF.Accidental("n"));
		// 	} else {
		// 		notes[i] = new VF.StaveNote({ keys: [sharps[scaleType[i].deg+offset].note], duration: "w" });
		// 	}
		// }
	}
}


VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "img-blu-sc-c".
var div = document.getElementById("scaleImg")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(800, 200);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 780 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 40, 780);

// Add a clef.
stave.addClef("treble");
// Add a key signature.
stave.addKeySignature(keySig);

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

var notes = [];

printScale();

var voice = new VF.Voice({num_beats: notes.length,  beat_value: 1});
voice.addTickables(notes);

// Format and justify the notes to 760 pixels.
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 700);


// ********************* PITCH DETECTION ********************


//Highlight notes over time
var currentNote = 0;
var prevNote = currentNote - 1;
var pracCount = 0;
var myInterval = setInterval(highlightNotes, 10);

function highlightNotes() {
	if(currentNote>=notes.length){
		notes[prevNote].setStyle({fillStyle: "black"});
		voice.draw(context,stave);
		currentNote = 0;
		prevNote = currentNote - 1;
		pracCount++;
		if(pracCount==3){
			clearInterval(myInterval);
			completePrac();
		}
	} else if((document.getElementById("note").childNodes[0].nodeValue)==(sharps[scaleType[currentNote].deg+offset].freq)){
		if(currentNote==0){
			notes[currentNote].setStyle({fillStyle: "red"});
			voice.draw(context,stave);
			currentNote++;
			prevNote++;
		}
		else {
			notes[currentNote].setStyle({fillStyle: "red"});
			voice.draw(context,stave);
			notes[prevNote].setStyle({fillStyle: "black"});
			voice.draw(context,stave);
			currentNote++;
			prevNote++;
		}
	}
}

// Render voice
voice.draw(context, stave);


function completePrac() {
	var nextPage = document.getElementsByClassName("nextPage")[0].childNodes[0].nodeValue;
	alert("Great job!");
	window.location.href = nextPage;
}