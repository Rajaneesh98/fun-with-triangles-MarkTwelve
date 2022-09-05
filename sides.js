const sides = document.querySelectorAll(".sides");

const btnEl = document.querySelector("#hyp-btn");
const outputEl = document.querySelector("#output");

function getHypo() {
  var side1 = Number(sides[0].value);
  var side2 = Number(sides[1].value);
  console.log(side2);

  if (side2 <= 0 || side1 <= 0) {
    console.log("invalid entries");

    outputEl.innerText = "Provide valid Values Greater than Zero";
  } else {
    var squaresSum = side1 ** 2 + side2 ** 2;
    var hypo = Math.sqrt(squaresSum);
    hypo = hypo.toFixed(2);

    outputEl.innerText = "The length of Hypotenuse is : " + hypo;
  }
}

btnEl.addEventListener("click", getHypo);
