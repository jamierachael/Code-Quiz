// Use this keyword: 
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    // Fill in all question into this one object
    ///etc.
];

var score = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var choicesUl = document.querySelector("#choicesUl");


// Seconds left is 15 seconds per question:
var secondsLeft = 5;
// Holds interval time
var holdInterval = 0;
// var newVariable;

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // Validating the "input" 
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = secondsLeft + " seconds left for quiz";

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                // alert("Zero!");
            }
        }, 1000);
    }
    render();
});

// Renders questions and choices to page: 
function render() {

    questions.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        // Variable created to hold title part of question
        var userQuestion = questions[i].title;
        // writes title part of question into the div
        questionsDiv.textContent = userQuestion;
        // Variable to create list element 
        var liCreate = document.createElement("li");
        // writes users question into list 
        // liCreate.textContent = userQuestion;

        // liCreate.setAttribute("data-index", i);
        // Variable created to hold choices part of question
        var userChoices = questions[i].choices;
        // writes choices part into Ul area
        // choicesUl.textContent = userQuestion;
        // writes choices part into li area
        liCreate.textContent = userChoices;
        // Variable created to hold user response part of question
        var userResponse = questions[i].answer;
        questionsDiv.appendChild(liCreate);
    }

    liCreate.addEventListener("click", function (event) {
        var element = event.target;

        if (element.matches("li")) {
            console.log(liCreate);
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "createDiv");

            // Not sure if correct works

            if (userChoices == userResponse) {
                score++;
                alert("Correct!");
                createDiv.textContent = userChoices;

            } else {
                // alert("Wrong!");
                // alert("Your answer was  " + userResponse);
                createDiv.textContent = "Wrong! Your answer was:  " + userResponse + ". The correct answer was:  " + userChoices;
            }
            alert("You got score  " + "/" + questions.length);
            console.log(score++);
        }
        questionsDiv.appendChild(createDiv);
    });

}