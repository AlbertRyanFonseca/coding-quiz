var timeEl = document.getElementById("time");
var questionEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start-button");
var indicatorEl = document.getElementById("indicator");

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

    askQuestion();
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

    choicesEl.children[0].addEventListener("click", function (event) {
        clickButton(choicesEl.children[0]);
    });
    choicesEl.children[1].addEventListener("click", function (event) {
        clickButton(choicesEl.children[1]);
    });
    choicesEl.children[2].addEventListener("click", function (event) {
        clickButton(choicesEl.children[2]);
    });
    choicesEl.children[3].addEventListener("click", function (event) {
        clickButton(choicesEl.children[3]);
    });
}

function clickButton(choiceAnswered) {
    if (choiceAnswered.textContent != questions[questionIndex].answer) {
        time -= 5;
        indicatorEl.textContent = "Incorrect";
    } else {
        indicatorEl.textContent = "Correct";
    }

    indicatorEl.setAttribute("class", "indicator");
    setInterval(function () {
        indicatorEl.setAttribute("class", "indicator hide__content");
    }, 500);
    questionIndex++;

    if (questionIndex === questions.length) {
        // end the quiz
    } else {
        askQuestion();
    }

}