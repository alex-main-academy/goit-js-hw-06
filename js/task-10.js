const amountOfElements = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const mainDivEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let widthElement = 30;
  let heightElement = 30;

  for (let i = 0; i < amount; i++) {
    let newDivElement = document.createElement("div");
    let color = getRandomHexColor();

    newDivElement.style.cssText = `
      width: ${widthElement}px;
      height: ${heightElement}px;
      background-color: ${color};
    `;

    mainDivEl.append(newDivElement);

    widthElement += 10;
    heightElement += 10;
  }
}

function destroyBoxes() {
  [...mainDivEl.children].forEach((elem) => {
    elem.remove();
  });
}

createBtnEl.addEventListener("click", () => {
  let amount = Number(amountOfElements.value);
  createBoxes(amount);
});

destroyBtnEl.addEventListener("click", destroyBoxes);
