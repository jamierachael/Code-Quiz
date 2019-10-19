# Code-Quiz
Homework-4 Code Quiz
## Jamie Morris Homework-4 Code Quiz

* ['Code-Quiz'](https://github.com/jamierachael/Code-Quiz)
* ['Code-Quiz'](https://jamierachael.github.io/Code-Quiz/)
* ['Code-Quiz'](https://drive.google.com/file/d/1Vwszd5-rVd5LQKwpRoxpXqu_1eiH3uDI/view)



### Summary
* HTML and CSS and Javascript documents create a quiz with multiple choice questions with Javascript trivia
* This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document
* This project utilizes the use of appending HTML pages 

### This project has the following features: 
* A Start Quiz button 
    * This starts a timer for the user, each question averages 15 seconds each for a total time of 75 seconds + 1. 
* An appended HTML page that features questions, and multiple choice answers
    * If questions are answered incorrectly, 5 seconds are deducted off remaining time
    * Answers are recording using an event listener, "click" and tracks correct answers
* An appended HTML page that features: 
    * Final score which is calculated using time remaining
    * A Summary of how many questions answered correctly 
    * Input area to record initials
    * A Submit button
    * Submit buttom saves initials and score to local storage
* A Highscores HTML
    * This a list summary of intials and final scores
    * Clear button resets the page and local storage
    * Go back button travels to the start of the quiz

### Psuedo code:  
* Create a timer attached to a button with a starting value of 0
* When timer is pressed start a reverse countdown
* Create a 0 for countdown 
* When countdown starts, start quiz
* Start Quiz will be on appended page
* Append the question: choices
* When user selects the right answer, textcontent "Correct!"
* When user selects the right answer, textcontent "Wrong!"
* Final score will keep track of how many the user got right 
* Left over time will be deducted from final score 
* Final Score Appended page 
* Captures local storage
* Travels to another HTML
* Retrieved highscores

### This project has script features of:
* Questions contained in an array variable with objects
* Variable declaration area 
* An event listener (onclick) that generates time interval
* A function to render the questions and choices on the page using a for loop
* An event listener on all list choices 
* A comparison statement to compare correct answers to choices
* An appended page showing the final stats of the individual user with input area for initials, captures local storage
* Highscores retreived local storage

### This project has media Queries for:
* max-width: 980px 
    * Adjusts body and container width
* max-width: 786px
    * Adjusts body and container width
    * Adjusts buttons
* max-width: 640px
    * Adjusts body and container width
    * Adjusts buttons to be centered and stacked

### To Execute File:
> Open in browser

### Features: 
* Two HTML Pages
    * Index.html 
        * Contains landing page to start timer
        * Appends two new pages 
* Highscores 
        * Retreives local data from previous page
* One CSS Page
    * Styles.css
        * Contains centering and styling for html list features
        * Contains media queries
* Two Javascript Page
        * Contains: 
        * Variables, including arrays with object
        * Event listeners
        * if/else if statements
        * For Loops
        * Functions 
        * Local Storage set and get 


### Code Validation 
    * These use W3C Code Validators for HTML and CSS
    * Please provide feedback whether this image syntax is correct
        * Format: ![Validator-HTML-Index](assets/images/Validator-HTML-Index)
        * Format: ![Validator-CSS](assets/images/Validator-CSS)
        * Format: ![Validator-CSS](assets/images/Validator-JS)








