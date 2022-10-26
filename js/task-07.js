const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function handlerChangeFontSize(event) {
  let fontSize = event.target.value;
  textEl.style.fontSize = `${fontSize}px`;
}

fontSizeControlEl.addEventListener("input", handlerChangeFontSize);
