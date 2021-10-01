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