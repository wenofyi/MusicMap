//create the context for the web audio
var audioCtx = new AudioContext();
// we create the gain module, named as volume, and connect it to our
var volume = audioCtx.createGain();
volume.connect(audioCtx.destination);


// var dogBarkingBuffer = null;
// // Fix up prefixing
// var context = new AudioContext();

// function loadDogSound(url) {
//   var request = new XMLHttpRequest();
//   request.open('GET', "../sounds/mnlg.wav", true);
//   request.responseType = 'arraybuffer';

//   // Decode asynchronously
//   request.onload = function() {
//     context.decodeAudioData(request.response, function(buffer) {
//       dogBarkingBuffer = buffer;
//     }, onError);
//   }
//   request.send();
// }

// // Fix up prefixing
// var context = new AudioContext();

// function playSound(buffer) {
//   var source = context.createBufferSource(); // creates a sound source
//   source.buffer = buffer;                    // tell the source which sound to play
//   source.connect(context.destination);       // connect the source to the context's destination (the speakers)
//   source.start(0);                           // play the source now
//                                              // note: on older systems, may have to use deprecated noteOn(time);
// }





//create, tune, start and connect each oscillator sinea, sineb and sinec
var sinea = audioCtx.createOscillator();
sinea.frequency.value = 440;
sinea.type = "sine";
sinea.start();
sinea.connect(volume);


var sineb = audioCtx.createOscillator();
sineb.frequency.value = 523.25;
sineb.type = "sine";
sineb.start();
sineb.connect(volume);


var sinec = audioCtx.createOscillator();
sinec.frequency.value = 698.46;
sinec.type = "sine";
sinec.start();
sinec.connect(volume);

volume.gain.value=0.1;





// var sampler = new Tone.Player("../sounds/mnlg.wav", function() {
// 	console.log("samples loaded");
// })

// sampler.connect();

// nx.onload = function() {
// 	button1.on('*',function(data) {
// 	console.log("button pressed!");
// 		sampler.start();
// 	});
// }


