let grid = [...document.getElementById("container").children];
let score = document.getElementById("score");
let guess = document.getElementById("guess");
let button = document.getElementById("button");
let answerSection = document.getElementById("answer");

const answer = "Put your money where your mouth is";

let scoreCount = 25;
// score.innerText.addEventListener("change", scoreEval);
function scoreEval() {
  if (scoreCount < 0) {
    lose();
    grid.forEach(box => {
      box.style.background = "none";
      box.style.border = "none";
      score.innerText = `Score: 0`;
    });

    answerSection.innerText = answer;
  }
}

grid.forEach(box => {
  box.addEventListener("click", gridUncover);
  box.addEventListener("click", scoreChange);
});
button.addEventListener("click", guessWord);
function gridUncover(id) {
  id.target.style.background = "none";
  id.target.style.border = "none";
  id.target.className = "uncovered";
}

function scoreChange(id) {
  id.target.removeEventListener("click", scoreChange);
  scores();
  scoreEval();
}

function guessWord(id) {
  const value = guess.value;
  if (/^put your money where your mouth is/i.test(value)) {
    alert("won");
    answerSection.innerText = "You've Won";
  } else {
    scores();
    scoreEval();
  }
}

function scores() {
  scoreCount--;
  score.innerText = `Score: ${scoreCount}`;
}

function lose() {
  alert(`you loose, the correct answer was ${answer}`);
}
