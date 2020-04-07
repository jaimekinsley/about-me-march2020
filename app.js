// checks is the answer is right - yes, y, or yass
import isYes from './is-yes.js';

// get DOM elements
const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('quiz-result');

//Initialization (setup, state variables)

// Event Handlers
function launchQuiz(){
    let correctAnswers = 0; //starts the counter at 0
    let name = '';  //this will change
    
    // show the user a message, the only option is OK
    alert('Welcome to the Jaime Quiz');

    // returns: true for "OK" and false for "Cancel"
    const confirmed = confirm ('Are you ready to take the quiz?');
    if (confirmed === false) {
        return; //breaks the function's execution
    }


    // returns string entered by user, unless they cancel in whichc ase returns null
    const firstName = prompt("What's your first name?");
    name = firstName;
    const lastName = prompt("What's your last name?");
    name += lastName;

    // get the text response from the user
    const isRunner = prompt('Is Jaime a runner? (Yes or No)?');

    // convert to boolean
    // isYes takes in a string and tells us if the string counts as a Yes, y, or yasss
    if (isYes(isRunner) === true) {
        correctAnswers++;
    }

    let response = 'Your name is ' + name;

    if (correctAnswers >= 1) {
        response += ' and you know something about Jaime!';
    } else {
        response += ' and you need to read more about Jaime!';
    }

    result.textContent = response;
}

quizButton.addEventListener('click', launchQuiz);