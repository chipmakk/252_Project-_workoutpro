

var workoutname = [];
var set.dur = [];
var rest.dur = [];
var b.set.alr = [];
var e.set.alr =[];

var workoutnameInput = document.getElementByID("custom");
var set.durInput = document.getElementByID("sd");
var rest.durInput = document.getElementByID("rd");
var b.set.alrInput = document.getElementByID("b_alr");
var e.set.alrInput = document.getElementByID("e_alr");

var workout_data = document.getElementByID("display_data")

$(document).ready (function insert () {
workoutname.push(workoutnameInput.value);
set.dur.push(set.durInput.value);
rest.dur.push(rest.durInput.value);
b.set.alr.push(b.set.alr.value);
e.set.alr.push(e.set.alrInput.value);



 clearAndShow();
});
$(document).ready(function clearAndShow ()  {
	//Clear out fields
	workoutnameInput.value = "";
	set.durInput.value = "";
	rest.durInput.value = "";
	b.set.alrInput.value = "";
	e.set.alrInput.value = "";

	// Show our output
	workout_data.innerHTML = "";

	workout_data.innerHTML += "Workout Name:" + workoutname.join(", ") + "<br/>";
  	workout_data.innerHTML += "Set Duraton:" + set.dur.join(", ") + "<br/>";
  	workout_data.innerHTML += "Rest Duration:" + rest.dur.join(", ") + "<br/>";
  	workout_data.innerHTML += "Begining of Set Alert:" + b.set.alr.join(",") + "<br/>";
  	workout_data.innerHTML += "End of Set Alert:" + e.set.alr.join(","); 
)}


function savewk() {
	var x = document.getElementByID("custom").value;
	document.getElementByID("demo") .innerHTML=x;
}


