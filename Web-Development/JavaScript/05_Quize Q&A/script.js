document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-Container");
    const scoreDisplay = document.getElementById("score");

    const questions = [

    ];

    let currentQuestionIndex= 0;
    let score = 0;

    startBtn.addEventListener("click", startQuiz);

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    restartBtn.addEventListener("click", => {
        currentQuestionIndex = 0;
        score =  0;
        resultContainer.classList.add("hidden")
        startQuiz();
    });

    function startQuiz() {

    }

    function showQuestion() {

    }

    function selectAnswer() {

    }

    function showResult() {

    }


});