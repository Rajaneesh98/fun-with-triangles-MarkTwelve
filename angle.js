const angles = document.querySelectorAll(".angles");

const angleCheckBtn = document.querySelector("#check-btn");

const outputCon = document.querySelector("#output");

function getSumOfAngles(angle1, angle2, angle3) {
  return (sum = angle1 + angle2 + angle3);
}

function checkForTriangle() {
  var angle1 = angles[0].value;
  var angle2 = angles[1].value;
  var angle3 = angles[2].value;
  if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    outputCon.innerText = "Enter angles greater than zero";
    return;
  }

  let sum = getSumOfAngles(Number(angle1), Number(angle2), Number(angle3));

  if (sum === 180) {
    outputCon.innerText = "Yes these angles will form a Triangle";
  } else {
    outputCon.innerText = "No these angles do not form a Triangle";
  }
}

angleCheckBtn.addEventListener("click", checkForTriangle);
