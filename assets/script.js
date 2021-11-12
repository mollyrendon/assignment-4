//Timer function
var timeLeft = 60

function MyTimer(callback, timeLeft) {
    val = timeLeft || 60;
    var timer = setInterval(function () {
      callback(timeLeft);
      if (timeLeft-- <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

if (answer == wrong) {
    timeLeft -5;
}



//Questions and Answers
const questions = [
    {
        question:"How do you make a comment in HTML?",
        answers: {
            a:"//Comment",
            b:"<!--Comment-->",
            c:"/*Comment*/",
            d:"/Comment",
        },
        correctAnswer:"b. <!--Comment-->"
    },
    {
        question:"How do you change the background color to 'dark blue' in CSS?",
        answers: {
            a:"background-color:  dark blue;",
            b:"color-background:  darkblue",
            c:"background-color:  darkblue",
            d:"background-color:  darkblue;",
        },
        correctAnswer:"d.  background-color: darkblue;"
},
{
        question:"In which part of the HTML document is the style.css sheet linked?",
        answers: {
            a:"Head",
            b:"Body",
            c:"Header",
            d:"Main",
        },
        correctAnswer:"d.  Main"
},
{
    question:"How do you check the status of your files in Git?",
    answers: {
        a:"git-status",
        b:"check status",
        c:"git status",
        d:"file status",
},
correctAnswer:"c.  git status"
},
{
    question:"What is the purpose of the alt attribute on an img tag?",
    answers: {
        a:"To add a description to the image to make it more accessable",
        b:"To change the size of the image",
        c:"To make the image circular",
        d:"To make the image brighter",
},
correctAnswer:"a.  To add a description to the image to make it more accessable"
},
];


