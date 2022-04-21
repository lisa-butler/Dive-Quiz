const allQuestions = [
  {
    question: "Solo diving is encouraged?",
    correctAnswer: false,
    submittedAnswer:null

  },
  {
    question: "Dive gear should only be serviced by a qualified professional?",
    correctAnswer: true,
    submittedAnswer:null

  },
  {
    question: "Giving a thumbs up signal while underwater means I am having a great time?",
    correctAnswer: false,
    submittedAnswer:null

  },
  {
    question: "Dive planning is not a necessary part of diving and can be left out?",
    correctAnswer: false,
    submittedAnswer:null
      
  },
{
    question: "Divers with many years of diving experience never have issues underwater?",
    correctAnswer: false,
    submittedAnswer:null
      
  },
{
    question: "The estuation tube is involved in balance and equalisation?",
    correctAnswer: true,
    submittedAnswer:null
      
  },
 {
    question: "It is advised to dive with ear plugs in?",
    correctAnswer: false,
    submittedAnswer:null
      
  },   
 {
    question: "Decompression sickness is caused by oxygen bubbles in the blood?",
    correctAnswer: false,
    submittedAnswer:null
      
  },   
 {
    question: "Diving with blocked sinuses is discouraged?",
    correctAnswer: true,
    submittedAnswer:null
      
  },   
 {
    question: "A divers teeth can be affected by pressure changes?",
    correctAnswer: true,
    submittedAnswer:null
      
  },  
{
    question: "A diver is submitted to 3 bar of pressure at 20meters?",
    correctAnswer: true,
    submittedAnswer:null
      
  },     
    
    
];



let activeQuestions = [];
let questionNumber = 0;
let correctAnswerCount = 0;


function startQuiz(){
    displayQuiz();
    
    activeQuestions = getRandomQuestionSet();
    console.log("activeQuestions: ",activeQuestions)
    
    updateQuestionText();    
 
}

function questionAnswered(answer){
    activeQuestions[questionNumber].submittedAnswer = answer;
    console.log("activeQuestions>questionAnswered: ",activeQuestions)
}

function submitAnswer(){
    if (null != activeQuestions[questionNumber].submittedAnswer){//TODO increment progressbar by 10
        questionNumber++;


        if (questionNumber == activeQuestions.length) {
            showResults();
        }  
        else {
            updateQuestionText();

        }
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

function getRandomQuestionSet(){
    const shuffled = allQuestions.sort(()=>0.5 - Math.random());
    return shuffled.slice(0,10); 
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
    
    let progress = document.createElement('div');
    progress.classList.add("progress");
    progress.setAttribute('id','progress');
    quizContainer.appendChild(progress);
    
    let progressBar = document.createElement('div');
    progressBar.classList.add("progress-bar");
    progressBar.classList.add("progress-bar-striped");
    progressBar.setAttribute('id','progressBar');
    progressBar.style = "width:0%"
    progress.appendChild(progressBar);  
}