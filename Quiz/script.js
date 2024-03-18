const Questions = [
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        answers: [
            { text: "A. Camel", correct: true },
            { text: "B. Elephant", correct: false },
            { text: "C. Zebra", correct: false },
            { text: "D. Tiger", correct: false },
        ]
    },
    {
        question: "Who designed the National Flag of India?",
        answers: [
            { text: "A. Subhash Chandra Bose", correct: false },
            { text: "B. Pingali Venkayya", correct: true },
            { text: "C. Rama Lakshman", correct: false },
            { text: "D. Rabindranath Tagore", correct: false },
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            { text: "A. Maharashtra", correct: false },
            { text: "B. Hyderabad", correct: false },
            { text: "C. Munbai", correct: false },
            { text: "D. New Delhi", correct: true },
        ]
    },
    {
        question: "How many Union Territories are there in India?",
        answers: [
            { text: "A. 6 Union Territories", correct: false },
            { text: "B. 18 Union Territories", correct: false },
            { text: "C. 8 Union Territories", correct: true },
            { text: "D. 20 Union Territories", correct: false },
        ]
    }
];

const questionSection = document.getElementById("questions");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function start() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    let currentQuestion = Questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionSection.innerHTML = questionNo + ". " + currentQuestion.question + "<br>";
     
  
    currentQuestion.answers.forEach((answer, index) => {
        const optionLetter = String.fromCharCode(65 + index); 
        questionSection.innerHTML += answer.text + "<br>";
    });
}


function checkAnswer() {
    const currentQuestion = Questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct);

    const userAnswer = prompt("Enter your answer (A, B, C, D):");
    if (userAnswer === correctAnswer.text.charAt(0)) { 
        score++
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < Questions.length) {
        showQuestions();
    } else {
        alert("Quiz finished! Your score is: " + score + "/" + Questions.length);
    }
}

nextButton.addEventListener("click", checkAnswer);

start();