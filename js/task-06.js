const inputElement = document.querySelector("#validation-input");

function handlerIsInputValid() {
  const inputLength = Number(inputElement.dataset.length);

  if (inputElement.value.length === inputLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
}

inputElement.addEventListener("blur", handlerIsInputValid);
