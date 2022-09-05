const formEl = document.querySelector("#form");

const btnEl = document.querySelector("#btn");

const outputEl = document.querySelector("#output");

var answersList = [60, 90, 120, 90, 90, 90];

function showResult() {
  const allDataFromForm = new FormData(formEl);

  //console.log(allDataFromForm)
  indexForAnswers = 0;
  score = 0;

  for (let value of allDataFromForm.values()) {
    if (value == answersList[indexForAnswers]) {
      console.log(value);
      score = score + 1;
    }
    indexForAnswers += 1;
  }
  console.log(score);

  outputEl.innerText = "your score is: " + score;
}

btnEl.addEventListener("click", showResult);
