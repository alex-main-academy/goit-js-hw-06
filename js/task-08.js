const formElement = document.querySelector(".login-form");
const emailElement = document.querySelector('[name="email"]');
const passwordElement = document.querySelector('[name="password"]');

function handlerSubmit(event) {
  let user = {};

  if (emailElement.value === "" || passwordElement.value === "") {
    alert("Пожалуйста, заполните данные для входа");
  } else {
    user.name = formElement.elements.email.value;
    user.password = formElement.elements.password.value;

    console.log(user);
    event.preventDefault();
    formElement.reset();
  }
}

formElement.addEventListener("submit", handlerSubmit);
