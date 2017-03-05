//Define Global Variables, including quesitons object

var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var qdiv = $("#questions-div");

var q = {
	first: {
		question: "What is my name?",
		choices: ["Jimmy", "Frank", "Barrett", "George"],
		correctAnswerPosition: 2,		
	},
	second: {
		question: "Where do I live?",
		choices: ["Florida", "California", "Hawaii", "Chicago"],
		correctAnswerPosition: 0,
	},
	third: {
		question: "What's my favorite color?",
		choices: ["Purple", "Green", "Yellow", "Red"],
		correctAnswerPosition: 1,
	}
}

$.each(q, function(x, y) {
	console.log(y.question);
});

//Reset Function to write the questions.
function reset() {
		//Empties the div
		qdiv.empty();

	$.each(q, function(x, y) {

		//Writes the question
		qdiv.append("<h2>" + y.question + "</h2>");

		//Generates Radio Button Choices
			$.each(y.choices, function(c, d){
			qdiv.append('<input type="radio" name="name" value="test">' + d + '</br>');
		});

	});
	
	//Submit Button
	qdiv.append('<a id="submitbutton" class="btn btn-success">Submit</a>');
	$("#submitbutton").on("click", console.log("Submitted"));

};

//When the page loads

$(document).ready(function() {

//Show Start Button

qdiv.html('<a id="startbutton" class="btn btn-primary">Start!</a>');
$("#startbutton").on("click", reset);

});



