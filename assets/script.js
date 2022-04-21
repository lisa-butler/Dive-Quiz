const allQuestions = [
  {
    question: "Is the sky blue?",
    correctAnswer: true,
    submittedAnswer:null

  },
  {
    question: "Is the sky yellow?",
    correctAnswer: false,
    submittedAnswer:null

  },
  {
    question: "Is the sky pink?",
    correctAnswer: false,
    submittedAnswer:null

  }
];

let activeQuestions = [];
let questionNumber = 0;
let correctAnswerCount = 0;


function startQuiz(){
    displayQuiz();
    
    activeQuestions = allQuestions;
    console.log("activeQuestions: ",activeQuestions)
    
    updateQuestionText();    
 
}

function questionAnswered(answer){
    activeQuestions[questionNumber].submittedAnswer = answer;
    console.log("activeQuestions>questionAnswered: ",activeQuestions)
}

function submitAnswer(){
    questionNumber++;
    
    if (questionNumber == activeQuestions.length) {
        showResults();
    }  
    else {
        updateQuestionText();

    }
}

function showResults(){
    document.getElementById("question").textContent = "Results";
    let answer = document.getElementById("answer");
    answer.innerHTML = "";
    document.getElementById("submit-btn").textContent = "Try Again";
    document.getElementById("submit-btn").setAttribute('onclick','location.reload()');
    
    activeQuestions.forEach(getAnswerCount);
    console.log(correctAnswerCount + "/" + activeQuestions.length);
    
    let score = document.createElement('p');
    score.classList.add("h3");
    score.setAttribute('id','score');
    score.textContent = correctAnswerCount + "/" + activeQuestions.length;
    answer.appendChild(score);
}



//private functions
function getAnswerCount(question, index) {
    if (question.correctAnswer === question.submittedAnswer) {
        correctAnswerCount++;
    }
}
 

function updateQuestionText(){
    document.getElementById("question").textContent = activeQuestions[questionNumber].question;    
} 

      
function displayQuiz() {
    let quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML ="";
    
    let questionContainer = document.createElement('div');
    questionContainer.classList.add("text-center");
    questionContainer.setAttribute('id','question-container');
    quizContainer.appendChild(questionContainer);
    
    let question = document.createElement('p');
    question.classList.add("h2");
    question.setAttribute('id','question');
    question.textContent = 'Question Loading...';
    questionContainer.appendChild(question);
    
    let answer = document.createElement('div');
    answer.classList.add("container");
    answer.setAttribute('id','answer');
    questionContainer.appendChild(answer);    
    
    let row = document.createElement('div');
    row.classList.add("row");
    answer.appendChild(row); 
    
    let column1 = document.createElement('div');
    column1.classList.add("col-sm-6");
    row.appendChild(column1); 
    
    let trueBtn = document.createElement('button');
    trueBtn.classList.add("btn-success");
    trueBtn.classList.add("btn-lg");
    trueBtn.setAttribute('id','true-btn');
    trueBtn.textContent = 'True';
    trueBtn.setAttribute('onclick','questionAnswered(true)');
    column1.appendChild(trueBtn); 
    
    let column2 = document.createElement('div');
    column2.classList.add("col-sm-6");
    row.appendChild(column2); 
    
    let falseBtn = document.createElement('button');
    falseBtn.classList.add("btn-danger");
    falseBtn.classList.add("btn-lg");
    falseBtn.setAttribute('id','false-btn');
    falseBtn.textContent = 'False';
    falseBtn.setAttribute('onclick','questionAnswered(false)');
    column2.appendChild(falseBtn); 
    
    let submitBtn = document.createElement('button');
    submitBtn.classList.add("btn-primary");
    submitBtn.classList.add("btn-lg");
    submitBtn.setAttribute('id','submit-btn');
    submitBtn.textContent = 'Submit';
    submitBtn.setAttribute('onclick','submitAnswer()');
    questionContainer.appendChild(submitBtn); 
}