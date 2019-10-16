// Pseudocode 
// Create a timer attached to a button with a starting value of 0
// Whnen timer is pressed start a reverse countdown
// Create a 0 for countdown 

// When countdown starts, start quiz
// Append the question: choices
// When user selects the right answer, textcontent "Correct!"
// When user selects the right answer, textcontent "Wrong!"

// Final score will keep track of how many the user got right 
// Left over time will be deducted from final score 

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


var currentTime = document.querySelector("#currentTime");
var questionsDiv = document.querySelector("#questionsDiv");
var timer = document.querySelector("#startTime");
// Seconds left is 15 seconds per question:
var secondsLeft = 5;
// Holds interval time
var holdInterval = 0;


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

