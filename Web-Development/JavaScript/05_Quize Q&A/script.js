document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
            question: "Which S3 encryption technique should the Architect use?",
            choices: ["A. Use S3 client-side encryption with an AWS KMS key.", "B. Use S3 client-side encryption with a client-side master key.", "C. Use S3 server-side encryption with an AWS KMS key.", "D. Use S3 server-side encryption with customer provided key."],
            answer: "B. Use S3 client-side encryption with a client-side master key.",
          },
          {
            question: "Which of the following channels shares a collection of offerings to help you achieve specific business outcomes related to enterprise cloud adoption through paid engagements in several specialty practice areas?",
            choices: ["A. AWS Enterprise Support", "B. Concierge Support", "C. AWS Professional Services", "D. AWS Technical Account Manager"],
            answer: "C. AWS Professional Services",
          },
          {
            question: "To launch a new system in AWS but they do not have an employee who has AWS-related expertise. Which of the following AWS channels can instead help the company to build, migrate, and manage their workloads and applications on AWS ?",
            choices: [
              "A. AWS Partner Network Technology Partners",
              "B. AWS Marketplace",
              "C. AWS Partner Network Consulting Partners",
              "D. Technical Account Management",
            ],
            answer: "C. AWS Partner Network Consulting Partners",
          },
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

    restartBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score =  0;
        resultContainer.classList.add("hidden")
        startQuiz();
    });

    function startQuiz() {
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion() {
        nextBtn.classList.add("hidden");
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "";
        questions[currentQuestionIndex].choices.forEach((choice) => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener("click", () => selectAnswer(choice));
            choicesList.appendChild(li);
        });
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (choice === correctAnswer){
            score++;
        }
        nextBtn.classList.remove("hidden");
    }

    function showResult(){
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `
        ${score} out of ${questions.length}`
    }
})