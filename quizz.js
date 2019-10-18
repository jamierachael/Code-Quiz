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
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");



// Seconds left is 15 seconds per question:
var secondsLeft = 5;
// Holds interval time
var holdInterval = 0;
// var newVariable;
var ulCreate = document.createElement("ul");

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
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {

    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {

        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;
    // var userResponse = questions[i].answer;
    if (element.matches("li")) {
        // console.log(liCreate);
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        // correct answer works, does not text content to div

        if (element.textContent == questions[questionIndex].answer) {
            score++;
            alert("Correct!");
            // no longer working
            createDiv.textContent = element.textContent;
        } else {
            alert("Wrong!");
            // Can use the same above for element.textContent;
            // not working
            createDiv.textContent = "Wrong! Your answer was:  " + element.textContent + ". The correct answer was:  " + questions[questionIndex].answer;
        }
        alert("You got score  " + "/" + questions.length);
        console.log(score++);
        // Should this be changed?

    }
    // Question Index is not added 1 when on second question
    questionIndex++;
    // render(questionIndex);
    console.log(questionIndex);
    // questionsDiv.appendChild(createDiv);

    // Needs to detect end of array: 
    // lastIndexOf(questionIndex);
    //  break; ?
    if (questionIndex >= questions.length) {
        // Proper spot to call this: 
        // allDone();
        alert("end of quiz!");
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}