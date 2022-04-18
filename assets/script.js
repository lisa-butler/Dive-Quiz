
function startQuiz() {
    let quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML ="";
    
    let questionContainer = document.createElement('div');
    questionContainer.classList.add("text-center");
    questionContainer.setAttribute('id','question-container');
    quizContainer.appendChild(questionContainer);
    
    let question = document.createElement('div');
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
    trueBtn.setAttribute('onclick','answerTrue()');
    column1.appendChild(trueBtn); 
    
    let column2 = document.createElement('div');
    column2.classList.add("col-sm-6");
    row.appendChild(column2); 
    
    let falseBtn = document.createElement('button');
    falseBtn.classList.add("btn-danger");
    falseBtn.classList.add("btn-lg");
    falseBtn.setAttribute('id','false-btn');
    falseBtn.textContent = 'False';
    falseBtn.setAttribute('onclick','answerFalse()');
    column2.appendChild(falseBtn); 
    
    let submitBtn = document.createElement('button');
    submitBtn.classList.add("btn-primary");
    submitBtn.classList.add("btn-lg");
    submitBtn.setAttribute('id','submit-btn');
    submitBtn.textContent = 'Submit';
    submitBtn.setAttribute('onclick','submitAnswer()');
    questionContainer.appendChild(submitBtn); 
}
      
