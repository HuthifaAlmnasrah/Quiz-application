const quizData = [
  {
    question: "In Java Arrays are?",
    a: "objects",
    b: "object references",
    c: "primitive data type",
    d: "None of the above",
    correctAns: "a",
  },
  {
    question: "Which of th following is a valid statment?",
    a: "char[] c = new char();",
    b: "char[] c = new char[5];",
    c: "char[] c = new char(4);",
    d: "char[] c = new char[];",
    correctAns: "b",
  },
  {
    question: "What is the result of compiling and running the following code?",
    code: "public class Test{\n\tpublic static void main(String[]args){\n\t\t\tint[] a = new int[0];System.out.print(a.lenght);\n\t}\n}",
    a: "0",
    b: "Compilation error, arrays cannot be initialized to zero size.",
    c: "Compilation error, it is a.length() not a.length",
    d: "None of the above",
    correctAns: "a",
  },
  {
    question: "what will be the output?",
    code: 'public class Test{\n\tpublic static void main(String[]args){\n\t\tint[] x = new int[3];System.out.print("x[0] is "+ x[0]);\n\t}\n}',
    a: "The program has a compile error because the size of the array wasn't specified when declaring the array.",
    b: "The program has a runtime error because the array elements are not initialized.",
    c: "The program runs fine and displays x[0] is 0.",
    d: "The program has a runtime error because the array element x[0] is not defined.",
    correctAns: "c",
  },
  {
    question: "What is the output of the following code?",
    code: "public class Test{\n\tpublic static void main(String[]args){\n\t\tdouble[] myList = {1,5,5,5,5,1};\n\t\tdouble max = myList[0];\n\t\tint indexOfMax = 0; \n\t\tfor(int i=0; i < myList.lenght; i++){\n\t\t\tif(myList[i] > max){\n\t\t\t\tmax = maxList[i];\n\t\t\t\tindexOfMax = i;\n\t\t\t}\n\t\t}\n\t\tSystem.out.print(indexOfMax);\n\t}\n}",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    correctAns: "b",
  },
];
const quiz = document.getElementById("quiz");
const code = document.getElementById("code");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const answersEls = document.querySelectorAll('[name="answer"]');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answersEls) => {
    if (answersEls.checked) {
      answer = answersEls.id;
    }
  });

  return answer;
}

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  currentQuizData.code == undefined
    ? (code.style.display = "none")
    : (code.style.display = "block");
  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  code.innerText = currentQuizData.code;
}

function deselectAnswers() {
  answersEls.forEach((answersEls) => {
    answersEls.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (quizData[currentQuiz].correctAns === answer) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>
      Your Score is ${score} / ${quizData.length} </br> Good Luck
      <button onClick="location.reload()">Reload</button>
      </h2>`;
    }
    deselectAnswers();
  } else {
    alert("choose an answer");
  }
});
