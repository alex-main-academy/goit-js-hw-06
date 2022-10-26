const inputTextEl = document.querySelector("#name-input");
const nameTextEl = document.querySelector("#name-output");

function handlerChangeName() {
  if (inputTextEl.value === "") {
    nameTextEl.textContent = "Anonymous";
  } else {
    nameTextEl.textContent = inputTextEl.value;
  }
}

inputTextEl.addEventListener("input", handlerChangeName);
