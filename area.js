const sides = document.querySelectorAll(".sides");

const btn = document.querySelector("#check-btn");

const outputEl = document.querySelector("#output");

function calculateArea() {
  var side1 = Number(sides[0].value);

  var side2 = Number(sides[1].value);

  var side3 = Number(sides[2].value);
  console.log(side3);

  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    outputEl.innerText = "please give valid Values Greater than Zero";
  } else {
    var sPerimeter = (side1 + side2 + side3) / 2;

    var area = Math.sqrt(
      sPerimeter *
        (sPerimeter - side1) *
        (sPerimeter - side2) *
        (sPerimeter - side3)
    );
    let out = "calculated area is: " + area;
    outputEl.innerText = out;
  }
}

btn.addEventListener("click", calculateArea);
