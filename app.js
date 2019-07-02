let grid = [...document.getElementById("container").children];
let score = document.getElementById("score");
let guess = document.getElementById("guess");
let scoreCount = 25;

grid.forEach(box => {
  box.addEventListener("click", gridUncover);
  box.addEventListener("click", scoreChange);
});

function gridUncover(id) {
  id.target.style.background = "none";
  id.target.style.border = "none";
  id.target.className = "uncovered";
}

function scoreChange(id) {
  id.target.removeEventListener("click", scoreChange);
  score.innerText = `Score: ${scoreCount - 1}`;
  scoreCount--;
}
