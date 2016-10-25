VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "img-blu-sc-c".
var div = document.getElementById("img-blu-sc-c")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(800, 200);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 780 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 40, 780);

// Add a clef.
stave.addClef("treble");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

var notes = [
  new VF.StaveNote({ keys: ["c/4"], duration: "w" }),
  new VF.StaveNote({ keys: ["eb/4"], duration: "w" }).addAccidental(0, new VF.Accidental("b")),
  new VF.StaveNote({ keys: ["f/4"], duration: "w" }),
  new VF.StaveNote({ keys: ["f#/4"], duration: "w" }).addAccidental(0, new VF.Accidental("#")),
  new VF.StaveNote({ keys: ["g/4"], duration: "w" }),
  new VF.StaveNote({ keys: ["bb/4"], duration: "w" }).addAccidental(0, new VF.Accidental("b")),
  new VF.StaveNote({ keys: ["c/5"], duration: "w" }),
  new VF.StaveNote({ keys: ["bb/4"], duration: "w" }).addAccidental(0, new VF.Accidental("b")),
  new VF.StaveNote({ keys: ["g/4"], duration: "w" }),
  new VF.StaveNote({ keys: ["f#/4"], duration: "w" }).addAccidental(0, new VF.Accidental("#")),
  new VF.StaveNote({ keys: ["f/4"], duration: "w" }),
  new VF.StaveNote({ keys: ["eb/4"], duration: "w" }).addAccidental(0, new VF.Accidental("b")),
  new VF.StaveNote({ keys: ["c/4"], duration: "w" }),
];

var voice = new VF.Voice({num_beats: 13,  beat_value: 1});
voice.addTickables(notes);

// Format and justify the notes to 760 pixels.
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 760);

//Highlight notes over time
var currentNote = 0;
var prevNote = currentNote - 1;

var myInterval = setInterval(highlightNotes, 200);

function highlightNotes() {
	if(currentNote>=notes.length){
		notes[prevNote].setStyle({fillStyle: "black"});
		voice.draw(context,stave);
		clearInterval(myInterval);
	}
	else if(currentNote==0){
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

// Render voice
voice.draw(context, stave);
