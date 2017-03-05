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
	}
}

//Reset Function to write the questions.
function reset() {

	//Writes the question
	var a = $("<h2>");
	a.text(q.first.question);
	qdiv.html(a);

	//Generates Radio Button Choices
	for (var i = 0; i < q.first.choices.length; i++) {
		qdiv.append('<input type="radio" name="name" value="test">' + q.first.choices[i] + '</br>');
	};

	//Next & Submit Buttons
	qdiv.append('<a id="nextbutton" class="btn btn-primary">Next</a>');
	$("#nextbutton").on("click", nextQuestion);
};

//When the page loads

$(document).ready(function() {

//Show Start Button

qdiv.html('<a id="startbutton" class="btn btn-primary">Start!</a>');
$("#startbutton").on("click", reset);

});



