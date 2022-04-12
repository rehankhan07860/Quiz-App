const quizDB = [
{
    question: "Q1: What is the full form of HTML?",
    a: "Home Tool Markup Language",
    b: "Hyperlinks and Text Markup Language",
    c: "HyperText Markeup Language",
    d: "HyperText Markup Language",
    ans: "ans4"
},
{
    question: "Q2: What is the full form of css?",
    a: "cascding style shit",
    b: "Cascading style sheet",
    c: "HyperText Markeup Language",
    d: "HyperText Markup Language",  
    ans: "ans2"
},
{
    question: "Q3: What is the full form of js?",
    a: "JavaScript",
    b: "what are you doing",
    c: "HyperText Markeup Language",
    d: "HyperText Markup Language",
    ans: "ans1"
},
{
    question: "Q4: What is the full form of dbms?",
    a: "Hello to khan bhai",
    b: "what are you doing",
    c: "HyperText Markeup Language",
    d: "DataBase Management System",
    ans: "ans4"
},
{
    question: "Q5: Which of the following tag is used to insert a line-break in HTML?",
    a: "<br>",
    b: "<a>",
    c: "pre",
    d: "<b>",
    ans: "ans1"
},
{
    question: "Q6: Which of the following element is responsible for making the text italic in HTML?",
    a: "<i>",
    b: "<italic>",
    c: "<it>",
    d: "<pre>",
    ans: "ans1"
},
{
    question: "Q7: The <hr> tag in HTML is used for?",
    a: "new line",
    b: "vertical ruler",
    c: "new paragraph",
    d: "horzontal ruler",  
    ans: "ans4"
},
{
    question: "Q8: Which of the following attribute is used to provide a unique name to an elemetn?",
    a: "class",
    b: "id",
    c: "type",
    d: "none of the above",
    ans: "ans2"
},
{
    question: "Q9: What are the types of unordered or bulleted list in HTML?",
    a: "disc,square,triangle",
    b: "polygon,triangle,circle",
    c: "disc,circle,square",
    d: "All of the above",
    ans: "ans3"
},
{
    question: "Q10: Which of the following tag is used to insert a bold in HTML?",
    a: "<br>",
    b: "<a>",
    c: "pre",
    d: "<b>",
    ans: "ansd"
},
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
   
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
      if(curAnsElem.checked){
          answer = curAnsElem.id;
      } 
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);

if(checkedAnswer === quizDB[questionCount].ans){
    score++;
};
questionCount++;
deselectAll();

if(questionCount < quizDB.length){
    loadQuestion();
}else {
 showScore.innerHTML = `
 <h3> you scored ${score} /${quizDB.length}</h3>
 <button class = "btn" onclick = "location.reload()">Play Again</button>`
 

 showScore.classList.remove('scoreArea');
}
});