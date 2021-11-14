//Quiz Functions

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