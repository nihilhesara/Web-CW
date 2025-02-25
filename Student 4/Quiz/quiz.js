const questions = [
    {
        question: "What is the primary goal of health equity ?",
        answers: [
            {text: "Equality", correct: true},
            {text: "Profit", correct: false},
            {text: "Discrimination", correct: false},
            {text: "Exclusivity", correct: false},
        ]
    },

    {
        question: "What perpetuates disparities in healthcare access ?",
        answers: [
            {text: "Advocacy", correct: false},
            {text: "Discrimination", correct: true},
            {text: "Collaboration", correct: false},
            {text: "Empowerment", correct: false},
        ]
    },

    {
        question: "What is the overarching focus of pathways to health equity ?",
        answers: [
            {text: "Diversity", correct: false},
            {text: "Profitability", correct: false},
            {text: "Fairness", correct: true},
            {text: "Exclusivity", correct: false},
        ]
    },

    {
        question: "What approach does the topic advocate for regarding alcohol use ?",
        answers: [
            {text: "Control", correct: false},
            {text: "Exploration", correct: false},
            {text: "Moderation", correct: true},
            {text: "Abstinence", correct: false},
        ]
    },

    {
        question: "What is emphasized for maintaining balance in alcohol consumption ?",
        answers: [
            {text: "Consistency", correct: true},
            {text: "Excess", correct: false},
            {text: "Variety", correct: false},
            {text: "Abstinence", correct: false},
        ]
    },

    {
        question: "Which human activity is a significant cause of air pollution ?",
        answers: [
            {text: "Swimming", correct: false},
            {text: "Cycling", correct: false},
            {text: "Driving", correct: true},
            {text: "Gardening", correct: false},
        ]
    },

    {
        question: "What is a common respiratory condition associated with air pollution ?",
        answers: [
            {text: "Asthma", correct: true},
            {text: "Diabetes", correct: false},
            {text: "Hypertension", correct: false},
            {text: "Arthritis", correct: false},
        ]
    },

    {
        question: "What is a common pollutant found in water bodies due to agricultural runoff ?",
        answers: [
            {text: "Nitrogen", correct: true},
            {text: "Oxygen", correct: false},
            {text: "Carbon", correct: false},
            {text: "Gold", correct: false},
        ]
    },

    {
        question: "What is a common waterborne disease caused by polluted water ?",
        answers: [
            {text: "Malaria", correct: false},
            {text: "Cholera", correct: true},
            {text: "Dengue", correct: false},
            {text: "Tuberculosis", correct: false},
        ]
    },

    {
        question: "What is a method for preventing water pollution from agricultural runoff ?",
        answers: [
            {text: "Recycling", correct: false},
            {text: "Desalination", correct: false},
            {text: "Reforestation", correct: false},
            {text: "Buffer zones", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const next = document.getElementById("next-btn");

let currentQuestionNumber = 0;
let score = 0;


function startQuiz(){
    currentQuestionNumber = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetQuiz();
    let currentQuestion = questions[currentQuestionNumber];
    let questionNo = currentQuestionNumber + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetQuiz(){
    next.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    next.style.display = "block"; 
}

function showScore(){
    resetQuiz();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
    next.innerHTML = "Take Again.";
    next.style.display = "block";
}

function handleNextButton(){
    currentQuestionNumber++;
    if(currentQuestionNumber < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

next.addEventListener("click", () =>{
    if(currentQuestionNumber < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();