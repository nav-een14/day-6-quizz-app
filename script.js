const quizData = [

{
question: "What does HTML stand for?",

options: [
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Markup Language",
"Hyper Transfer Markup Language"
],

answer: "Hyper Text Markup Language"
},

{
question: "Which language is used for styling?",

options: [
"HTML",
"CSS",
"Python",
"Java"
],

answer: "CSS"
},

{
question: "Which keyword creates a variable in JavaScript?",

options: [
"int",
"var",
"string",
"float"
],

answer: "var"
}

];

let currentQuestion = 0;
let score = 0;

const question =
document.getElementById("question");

const options =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

const result =
document.getElementById("result");

function loadQuestion(){

    const q =
    quizData[currentQuestion];

    question.textContent =
    q.question;

    options.innerHTML = "";

    q.options.forEach(option => {

        const button =
        document.createElement("button");

        button.textContent =
        option;

        button.classList.add("option");

        button.onclick = () => {

            if(option === q.answer){

                score++;
            }

            nextBtn.disabled = false;
        };

        options.appendChild(button);
    });
}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < quizData.length){

        loadQuestion();
    }

    else{

        question.style.display = "none";

        options.style.display = "none";

        nextBtn.style.display = "none";

        result.innerHTML =
        `Your Score: ${score}/${quizData.length}`;
    }
});

loadQuestion();