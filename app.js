let grid = [...document.getElementById(`container`).children];
let score = document.getElementById(`score`);
let guess = document.getElementById(`guess`);
let button = document.getElementById(`button`);
let answerSection = document.getElementById(`answer`);

const answer = `Put your money where your mouth is`;

let scoreCount = 25;
// score.innerText.addEventListener(`change`, scoreEval);
function scoreEval() {
  if (scoreCount < 0) {
    lose();
    grid.forEach(box => {
      box.style.background = `none`;
      box.style.border = `none`;
      score.innerText = `Score: 0`;
    });

    answerSection.innerText = `You lose! The answer was '${answer}'`;
  }
}

grid.forEach(box => {
  box.addEventListener(`click`, gridUncover);
  box.addEventListener(`click`, scoreChange);
});
button.addEventListener(`click`, guessWord);

guess.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    button.click();
  }
});

function gridUncover(id) {
  id.target.style.background = `none`;
  id.target.style.border = `none`;
  id.target.className = `uncovered`;
}

function scoreChange(id) {
  id.target.removeEventListener(`click`, scoreChange);
  scores();
  scoreEval();
}

function guessWord(id) {
  const value = guess.value;
  if (/^put your money where your mouth is/i.test(value)) {
    answerSection.innerText = `You've Won with a score of ${scoreCount}`;
    win();
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
function win() {
  grid.forEach(box => {
    box.removeEventListener(`click`, scoreChange);
    box.style.background = `none`;
    box.style.transition = "3000ms ease-out";
    box.style.border = `none`;
  });
}
