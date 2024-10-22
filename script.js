const sub = document.querySelectorAll(".sub");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const c = document.getElementsByClassName("choose");
const head = document.querySelector("h1");
const pop = document.querySelector(".popup");
const poph = document.querySelector("#winhead");
const butt = document.querySelector(".butt");
let b = document.querySelector(".box");
let ch;
let win = "";
let k = 0;
let flag = 0;
let ca = [0, 0, 0, 0, 0, 0, 0, 0, 0];
op1.addEventListener("click", (ev) => {
  ch = "cross";
  console.log(ch);
  b.style.zIndex = "0";
  c[0].innerHTML = "X";
  c[0].style.fontfamily = "Rethink Sans";
  c[0].style.textdecoration = "bold";
  c[0].style.fontSize = "2.5rem";
  game();
});
op2.addEventListener("click", (evs) => {
  ch = "circle";
  console.log(ch);
  b.style.zIndex = "0";
  c[0].innerHTML = "O";
  c[0].style.fontfamily = "Rethink Sans";
  c[0].style.fontSize = "2.5rem";
  c[0].style.textdecoration = "bold";
  game();
});
function game() {
  sub.forEach((j, i) => {
    j.addEventListener("click", (evr) => {
      if (ch === "cross" && j.innerHTML === "") {
        j.innerHTML =
          '<svg id="op1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
        c[0].innerHTML = "O";
        c[0].style.fontfamily = "Rethink Sans";
        ca[i] = 1;
        check();

        ch = "circle";
      } else if (ch === "circle" && j.innerHTML === "") {
        j.innerHTML =
          '<svg id="op2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
        c[0].innerHTML = "X";
        c[0].style.fontfamily = "Rethink Sans";
        ca[i] = 2;
        check();

        ch = "cross";
      } else {
        j.style.animation = "shake 0.5s";
      }
      checkForDraw();
    });
  });
}
function check() {
  if (
    (ca[0] == ca[1] && ca[1] == ca[2] && ca[0] == 1) ||
    (ca[3] == ca[4] && ca[4] == ca[5] && ca[3] == 1) ||
    (ca[6] == ca[7] && ca[7] == ca[8] && ca[6] == 1) ||
    (ca[0] == ca[3] && ca[3] == ca[6] && ca[0] == 1) ||
    (ca[1] == ca[4] && ca[4] == ca[7] && ca[1] == 1) ||
    (ca[2] == ca[5] && ca[5] == ca[8] && ca[2] == 1) ||
    (ca[0] == ca[4] && ca[4] == ca[8] && ca[0] == 1) ||
    (ca[2] == ca[4] && ca[4] == ca[6] && ca[2] == 1)
  ) {
    console.log("win");
    win = "cross";

    congo();
  } else if (
    (ca[0] == ca[1] && ca[1] == ca[2] && ca[0] == 2) ||
    (ca[3] == ca[4] && ca[4] == ca[5] && ca[3] == 2) ||
    (ca[6] == ca[7] && ca[7] == ca[8] && ca[6] == 2) ||
    (ca[0] == ca[3] && ca[3] == ca[6] && ca[0] == 2) ||
    (ca[1] == ca[4] && ca[4] == ca[7] && ca[1] == 2) ||
    (ca[2] == ca[5] && ca[5] == ca[8] && ca[2] == 2) ||
    (ca[0] == ca[4] && ca[4] == ca[8] && ca[0] == 2) ||
    (ca[2] == ca[4] && ca[4] == ca[6] && ca[2] == 2)
  ) {
    console.log("win");
    win = "circle";
    congo();
  }
}
function checkForDraw() {
  // Check if all positions are filled and there is no winner
  if (ca.every((cell) => cell !== 0) && win === "") {
    console.log("It's a draw!");
    poph.textContent = "Draw";
    pop.style.opacity = "1";
    pop.style.pointerEvents = "auto";
    pop.style.transform = "translateY(0vh)";
    c[0].innerHTML = "🥱";
    butt.addEventListener("click", () => {
      pop.style.display = "none";
      location.reload();
    });
  }
}
function congo() {
  if (win === "cross") {
    poph.textContent = "Cross wins";
    pop.style.opacity = "1";
    pop.style.pointerEvents = "auto";
    c[0].innerHTML = "Nice!🤤";
    pop.style.transform = "translateY(0vh)";
  } else if (win === "circle") {
    pop.style.opacity = "1";
    pop.style.pointerEvents = "auto";
    pop.style.transform = "translateY(0vh)";
    c[0].innerHTML = "Nice!🤤";
    poph.textContent = "Circle wins";
  }
  butt.addEventListener("click", () => {
    pop.style.display = "none";
    location.reload();
  });
}
head.addEventListener("mouseenter", () => {
  head.style.fontSize = "4rem";
});
head.addEventListener("mouseleave", () => {
  head.style.fontSize = "3.7rem";
});
