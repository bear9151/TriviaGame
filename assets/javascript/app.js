//Define Global Variables, including quesitons object

var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var qdiv = $("#questions-div");

var q = {
	first: {
		question: "What toy hosts the plastic corrosion awareness meeting on Tuesdays?",
		choices: ["Mr. Potato Head", "Rex", "Mr. Spell", "Lenny the Binoculars"],
		correctAnswerPosition: "2",		
	},
	second: {
		question: "What is the name of Sid's dog?",
		choices: ["Spud", "Bud", "Hank", "Scud"],
		correctAnswerPosition: "3",
	},
	third: {
		question: "When Woody asks the Magic 8 Ball if Andy will pick him, what does it say?",
		choices: ["Don't Count on it.", "Ask Again Later.", "Without a doubt.", "You may rely on it."],
		correctAnswerPosition: "0",
	},	
	fourth: {
		question: "What is the name of the gas station Woody and Buzz get left at?",
		choices: ["Rexco", "Dinoco", "FillerUp", "Sinclair"],
		correctAnswerPosition: "1",		
	},
	fifth: {
		question: "What classic movie line does Woody quote when he leaves Sid's bedroom?",
		choices: ["I'm gonna make him an offer he can't refuse.", "Go ahead, make my day.", "May the force be with you.", "There's no place like home."],
		correctAnswerPosition: "3",		
	},
	sixth: {
		question: "What is the name of the toy store in the Buzz Lightyear commercial?",
		choices: ["Al's Toy Barn", "Tiny's Toys", "Gepetto's", "The Toy Chest"],
		correctAnswerPosition: "0",
	},
	seventh: {
		question: "What does Woody hide under when Sid is looking for a toy to blow up?",
		choices: ["A blanket", "The bed", "A crate", "The toolbox"],
		correctAnswerPosition: "2",
	},	
	eighth: {
		question: "What does Sid say when he talks in his sleep?",
		choices: ["Noone has ever attempted a double bypass transplant before.", "I wanna go back to Summer Camp.", "I want to ride the pony.", "I want my mummy to tuck me in."],
		correctAnswerPosition: "2",		
	}
}

//	Correct jquery loop function:
//	$.each(q, function(x, y) {
//	console.log(y.question);
//	});

//Reset Function to write the questions.
function reset() {
	correctAnswers = 0;
	incorrectAnswers = 0;
	
	//Empties the div
	qdiv.empty();

	//Starts the form
	qdiv.append('<form id="quiz">')

	$.each(q, function(x, y) {

		//Writes the question
		qdiv.append("<h2>" + y.question + "</h2>");

		//Generates Radio Button Choices
			$.each(y.choices, function(c, d){
			qdiv.append('<input type="radio" name="' + x + '" value="' + c + '"> ' + d + '</br>');
		});

	});
	//Submit Button
	//TO DO: prevent submit from happening
	qdiv.append('</br><input type="submit" id="submit-button" class="btn btn-success"></input>');

	qdiv.append("</form>")

	$("#submit-button").on("click", function() {
		checkAnswers();
		event.preventDefault();
	});


};
	
//Check Answers function

function checkAnswers() {
	var firstAnswer = $('input[name=first]:checked').val();
	var secondAnswer = $('input[name=second]:checked').val();
	var thirdAnswer = $('input[name=third]:checked').val();
	var fourthAnswer = $('input[name=fourth]:checked').val();
	var fifthAnswer = $('input[name=fifth]:checked').val();
	var sixthAnswer = $('input[name=sixth]:checked').val();
	var seventhAnswer = $('input[name=seventh]:checked').val();
	var eighthAnswer = $('input[name=eighth]:checked').val();

	if (firstAnswer === q.first.correctAnswerPosition) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};

	if (secondAnswer === q.second.correctAnswerPosition) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};

	if (thirdAnswer === q.third.correctAnswerPosition) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};

	if (fourthAnswer === q.fourth.correctAnswerPosition) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};

	if (fifthAnswer === q.fifth.correctAnswerPosition) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};	

	if (sixthAnswer === q.sixth.correctAnswerPosition) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};

	if (seventhAnswer === q.seventh.correctAnswerPosition) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};

	if (eighthAnswer === q.eighth.correctAnswerPosition) {
		correctAnswers++;
	} else {
		incorrectAnswers++;
	};

qdiv.html("<h1>Finished!</h1>")
	.append("<h2>Correct Answers: " + correctAnswers + "</h2>")
	.append("<h2>Incorrect Answers: " + incorrectAnswers + "</h2>")
	.append('<a id="reset-button" class="btn btn-warning">Play Again!</a>');
	$("#reset-button").on("click", function() {
		reset();
		event.preventDefault();
	});
}



//When the page loads

$(document).ready(function() {

//Show Start Button

qdiv.html('<a id="startbutton" class="btn btn-primary">Start!</a>');
$("#startbutton").on("click", reset);

});


