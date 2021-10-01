var timeEl = document.getElementById("time");
var questionEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start-button");

var timerId;
var questionIndex = 0;
var time = questions.length * 10;

function clockTime() {
    time--;
    timeEl.textContent = time;

    // placeholder for future function
    // if (time <= 0) {
    //     endQuiz();
    // }
}

function quizStart() {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "start hide__content");

    questionEl.setAttribute("class", " ");
    timerId = setInterval(function () {
        clockTime();
    }, 1000);
    timeEl.textContent = time;

}

function askQuestion() {
    var currentQuestion = questions[questionIndex];
    questionEl.children[0].textContent = currentQuestion.title;

    while (choicesEl.hasChildNodes()) {
        choicesEl.removeChild(choicesEl.lastChild);
    }

    for (var i = 0; currentQuestion.choices.length; i++) {
        var buttonChoice = document.createElement("button");
        buttonChoice.textContent = currentQuestion.choices[i];
        choicesEl.appendChild(buttonChoice);
    }
}

function clickButton(choiceAnswered) {
    if (choiceAnswered.textContent != questions[questionIndex].answer) {
        time -= 5;

    } else {

    }
}