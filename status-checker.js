function isNumber(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}

var input = document.getElementById('student');

var studID = "";
var intID = 0;

var meetings = document.getElementById('meetings');
var meetingsMark = document.getElementById('meetingsMark');
var goodStatus = document.getElementById('goodStatus');
var goodStatusMark = document.getElementById('goodStatusMark');
var sad = document.getElementById('sad');

var meet2 = meet.map(md5);
var jun2 = juniors.map(md5);

var updateInputs = function () {
	studID = input.value;
	intID = parseInt(studID);
	if (studID.length == 6){
		meetings.classList.remove("hidden");
		// remove penalty hours slot for first semester juniors
		if (!(juniors.indexOf(md5(studID)) > -1)) {
			goodStatus.classList.remove("hidden");
		}
		// mark meeting status
		if (meet.indexOf(md5(studID)) > -1) {
			meetingsMark.classList.remove("fa-times");
			meetingsMark.classList.add("fa-check");
		}
		else {
			meetingsMark.classList.remove("fa-check");
			meetingsMark.classList.add("fa-times");
		}
		// mark penalty hours status
		if (penh.indexOf(md5(studID)) > -1) {
			goodStatusMark.classList.remove("fa-times");
			goodStatusMark.classList.add("fa-check");
		}
		else {
			goodStatusMark.classList.remove("fa-check");
			goodStatusMark.classList.add("fa-times");
			sad.classList.remove("hidden");
		}

		// remove penalty hours slot for first semester juniors
		if (juniors.indexOf(md5(studID)) > -1) {
			goodStatus.classList.add("hidden");
			sad.classList.add("hidden");
		}
	} else {
		meetings.classList.add("hidden");
		goodStatus.classList.add("hidden");
		sad.classList.add("hidden");
	}
}
if (input.addEventListener) {
	input.addEventListener('keyup', function () {
		updateInputs();
	});
} else if (input.attachEvent) { // support IE
	input.attachEvent('onkeyup', function () {
		updateInputs();
	});
}

function two(){
	var twoScript = document.getElementById('two');
	twoScript.setAttribute("src", './letter.js')
}
