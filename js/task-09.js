const bodyElement = document.querySelector("body");
const nameOfColorEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerChangeBodyColor() {
  let color = getRandomHexColor();

  nameOfColorEl.textContent = color;
  bodyElement.style.background = color;
}

changeColorBtnEl.addEventListener("click", handlerChangeBodyColor);
