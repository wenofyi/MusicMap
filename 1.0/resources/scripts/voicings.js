var dom7s = ["C7","Db7","D7","Eb7","E7","F7","F#7","G7","Ab7","A7","Bb7","B7"];
var maj7s = ["CM7","DbM7","DM7","EbM7","EM7","FM7","F#M7","GM7","AbM7","AM7","BbM7","BM7"];
var min7s = ["Cm7","Dbm7","Dm7","Ebm7","Em7","Fm7","F#m7","Gm7","Abm7","Am7","Bbm7","Bm7"];
var dim7s = ["C<sup>o</sup>7","Db<sup>o</sup>7","D<sup>o</sup>7","Eb<sup>o</sup>7","E<sup>o</sup>7",
				"F<sup>o</sup>7","F#<sup>o</sup>7","G<sup>o</sup>7","Ab<sup>o</sup>7","A<sup>o</sup>7",
				"Bb<sup>o</sup>7","B<sup>o</sup>7"];

var noteLetters = ["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"];

var bluesBas = [0,5,0,0,5,5,0,0,7,5,0,7];
var iiviMaj = [
{deg:2,type:"min7"},
{deg:7,type:"dom7"},
{deg:0,type:"maj7"},
{deg:9,type:"dom7"},
{deg:2,type:"min7"},
{deg:7,type:"dom7"},
{deg:0,type:"maj7"},
{deg:9,type:"dom7"},
{deg:2,type:"min7"},
{deg:7,type:"dom7"},
{deg:0,type:"maj7"},
{deg:0,type:"maj7"}
];
var bluesAdv = [
{deg:0,type:"7"},
{deg:5,type:"7"},
{deg:0,type:"7"},
{deg:7,type:"m7"},
{deg:0,type:"7"},
{deg:5,type:"7"},
{deg:6,type:"<sup>o</sup>7"},
{deg:0,type:"7"},
{deg:4,type:"m7b5"},
{deg:9,type:"7b9"},
{deg:2,type:"m7"},
{deg:7,type:"7"},
{deg:4,type:"m7"},
{deg:9,type:"7"},
{deg:2,type:"m7"},
{deg:7,type:"7"}
];

var progType = document.querySelectorAll(".progType")[0].childNodes[0].nodeValue;
var scaleKey = document.querySelectorAll(".scaleKey")[0].childNodes[0].nodeValue;
var tonality;
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
	case "iiviMaj":
		numBars = 12;
		tonality = "maj";
		break;
	case "bluesAdv":
		numBars = 16; // Number of voicing symbols on chart
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

if(progType=="bluesBas"){
	for(var i=0;i<numBars;i++){
		document.querySelector("#voicing"+(i+1)).innerHTML = dom7s[(bluesBas[i]+offset)%12];
	}
}else if(progType=="iiviMaj"){
	for(var i=0;i<numBars;i++){
		if(iiviMaj[i].type=="dom7"){
			document.querySelector("#voicing"+(i+1)).innerHTML = dom7s[(iiviMaj[i].deg+offset)%12];
		} else if(iiviMaj[i].type=="min7"){
			document.querySelector("#voicing"+(i+1)).innerHTML = min7s[(iiviMaj[i].deg+offset)%12];
		} else if(iiviMaj[i].type=="maj7"){
			document.querySelector("#voicing"+(i+1)).innerHTML = maj7s[(iiviMaj[i].deg+offset)%12];
		}
	}
} else if(progType=="bluesAdv"){
	for(var i=0;i<numBars;i++){
		document.querySelectorAll(".voicings")[i].innerHTML = noteLetters[(bluesAdv[i].deg+offset)%12]+
				bluesAdv[i].type;
	}
}