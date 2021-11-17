//Functions draft 1

function myFunction() {
    document.getElementById("question1").classList.toggle("red");
  
  }
  
  function myFunction2() {
    nextQuestion(document.getElementById("question1"), document.getElementById("question2"));
  }
  
  function myFunction3() {
    nextQuestion(document.getElementById("question2"), document.getElementById("question3"));
  }
  
  function myFunction4() {
    nextQuestion(document.getElementById("question3"), document.getElementById("question4"));
  }
  
  function myFunction5() {
    nextQuestion(document.getElementById("question4"), document.getElementById("question5"));
  }
  
  function nextQuestion(quest1, quest2, quest3, quest4, quest5) {
    quest1.classList.toggle("hidden");
    quest1.classList.toggle("show");
    quest2.classList.toggle("hidden");
    quest2.classList.toggle("show");
    quest3.classList.toggle("hidden");
    quest3.classList.toggle("show");
    quest4.classList.toggle("hidden");
    quest4.classList.toggle("show");
    quest5.classList.toggle("hidden");
    quest5.classList.toggle("show");
  }
  
  
  
  
  
  
  
      //Timer function
      var timeRemaining = 60
      
      function MyTimer(callback, val) {
          val = val || 60;
          var timer = setInterval(function () {
            callback(val);
            if (val-- <= 0) {
              clearInterval(timer);
            }
          }, 1000);
        }




         //Questions and Answers as Objects
var questions = [
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



//Maybe Variables?

var questionContainer = document.getElementsByClassName('question-container-active')

var questionButton = document.getElementsByClassName('question-button')

questionButton.addEventListener('click', function () {})

function (answer, correct answer) 
{ if (answer === correct answer) {return true}
    
}
  


 