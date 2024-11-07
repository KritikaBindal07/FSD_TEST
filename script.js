let ques = document.getElementById("ques_label").innerHTML;
let container = document.getElementsByClassName("container")[1];

let questions = [
  {
    question: "What's the capital of India?",
    options: ["Lucknow", "Delhi", "Gzb", "Allahbaad"],
    correct: "Lucknow",
  },
  {
    question: "Red planet?",
    options: ["Mars", "Earth", "Venus", "Jupiter"],
    correct: "Mars",
  },
  {
    question: "CSS is used for?",
    options: ["Structure", "Design", "Functionality", "None"],
    correct: "Design",
  },
  {
    question: "React is?",
    options: ["Programming language", "JS librray", "Framework", "all"],
    correct: "framework",
  },
];

let len = 4;
console.log(ques);
console.log(container);
let i = 1;
function handleNext() {
  if (i < len) {
    i++;
    console.log(i);
    container.innerHTML = `<div class="question">
    <label id="ques_label" for="capital">
     ${questions[i].question}</label
    >
  </div>
  <div>
    <input
      id="option1_value"
      type="radio"
      name=${questions[i].options[0]}
      id="${questions[i].options[0]}"
    />
    <label id="option1_label" for="${questions[i].options[0]}">${questions[i].options[0]}</label>
  </div>
  <div>
    <input id="option2_value" type="radio" name="${questions[i].options[1]}" id="${questions[i].options[1]}" />
    <label id="option2_label" for="${questions[i].options[1]}">${questions[i].options[1]}</label>
  </div>
  <div>
    <input id="option3_value" type="radio" name="${questions[i].options[0]}" id="${questions[i].options[2]}" />
    <label id="option3_label" for="${questions[i].options[0]}">${questions[i].options[2]}</label>
  </div>

  <div class="buttons">
    <button onclick="handlePrev()" class="prev-btn">Previous</button>
    <button onclick="handleNext()" class="next-btn">Next</button>
  </div>`;
  }
  if(i==len-1){
    let next = document.getElementsByClassName("next-btn")[0]
   
    next.innerHTML = "Submit"
    next.style.background = "red"
    console.log(next)
  }
}

function handlePrev() {
  i--;
  console.log(i);
  container.innerHTML = `<div class="question">
    <label id="ques_label" for="capital">
     ${questions[i].question}</label
    >
  </div>
  <div>
    <input
      id="option1_value"
      type="radio"
      name=${questions[i].options[0]}
      id="${questions[i].options[0]}"
    />
    <label id="option1_label" for="${questions[i].options[0]}">${questions[i].options[0]}</label>
  </div>
  <div>
    <input id="option2_value" type="radio" name="${questions[i].options[1]}" id="${questions[i].options[1]}" />
    <label id="option2_label" for="${questions[i].options[1]}">${questions[i].options[1]}</label>
  </div>
  <div>
    <input id="option3_value" type="radio" name="${questions[i].options[0]}" id="${questions[i].options[2]}" />
    <label id="option3_label" for="${questions[i].options[0]}">${questions[i].options[2]}</label>
  </div>

  <div class="buttons">
    <button onclick="handlePrev()" class="prev-btn">Previous</button>
    <button onclick="handleNext()" class="next-btn">Next</button>
  </div>`;
}

