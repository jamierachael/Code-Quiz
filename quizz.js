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

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var questionsDiv = document.querySelector("#questionsDiv");
var timer = document.querySelector("#startTime");
// Seconds left is 15 seconds per question:
var secondsLeft = 5;
// Holds interval time
var holdInterval = 0;

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = secondsLeft + " seconds left for quiz";

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);

            }
        }, 1000);
    }
});

// Renders questions and choices to page: 
function render() {

    questions.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {

        var userQuestion = questions[i].title;
        questionsDiv.textContent = userQuestion;

        var li = document.createElement("li");
        li.textContent = userQuestion;

        li.setAttribute("data-index", i);

        var userChoices = questions[i].choices;
        choicesUl.textContent = userQuestion;
        li.textContent = userChoices;

        li.setAttribute("data-index", i);

        questionsDiv.appendChild(li);
    }
}
