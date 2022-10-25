// exercise 1
// const categories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categories.length}`);

// categories.forEach((elem) => {
//   console.log(`Category: ${elem.firstChild.nextSibling.innerText}`);
//   console.log(
//     `Elements: ${elem.firstChild.nextSibling.nextSibling.nextSibling.children.length}`
//   );
// });

// =========================================================================
// exercise 2
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const ingredientsElement = document.querySelector("#ingredients");

// ingredients.map((elem) => {
//   let listElement = document.createElement("li");
//   listElement.textContent = elem;
//   listElement.classList.add("item");
//   ingredientsElement.append(listElement);
// });

// =========================================================================
// exercise 3
// const galleryElement = document.querySelector(".gallery");

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// images.map(({ url, alt }) => {
//   const galleryItemElement = `
//     <li class="gallery__item">
//         <img src="${url}" alt="${alt}">
//     </li>
//     `;

//   galleryElement.insertAdjacentHTML("beforeend", galleryItemElement);
// });

// ========================================================================
// exercise 4
// const currentCounter = document.querySelector("#value");
// const increment = document.querySelector("[data-action='increment']");
// const decrement = document.querySelector("[data-action='decrement']");

// currentCounter.innerHTML = 0;

// function incrementNumber() {
//   currentCounter.innerHTML++;
// }
// function decrementNumber() {
//   currentCounter.innerHTML--;
// }

// increment.addEventListener("click", incrementNumber);
// decrement.addEventListener("click", decrementNumber);

// ========================================================================
// exercise 5
// const inputTextEl = document.querySelector("#name-input");
// const nameTextEl = document.querySelector("#name-output");

// function handlerChangeName() {
//   if (inputTextEl.value === "") {
//     nameTextEl.textContent = "Anonymous";
//   } else {
//     nameTextEl.textContent = inputTextEl.value;
//   }
// }

// inputTextEl.addEventListener("input", handlerChangeName);

// =========================================================================
// exercise 6
// const inputElement = document.querySelector("#validation-input");

// function handlerIsInputValid() {
//   const inputLength = Number(inputElement.dataset.length);

//   if (inputElement.value.length === inputLength) {
//     inputElement.classList.remove("invalid");
//     inputElement.classList.add("valid");
//   } else {
//     inputElement.classList.remove("valid");
//     inputElement.classList.add("invalid");
//   }
// }

// inputElement.addEventListener("blur", handlerIsInputValid);

// =========================================================================
// exercise 7
// const fontSizeControlEl = document.querySelector("#font-size-control");
// const textEl = document.querySelector("#text");

// function handlerChangeFontSize(event) {
//   let fontSize = event.target.value;
//   textEl.style.fontSize = `${fontSize}px`;
// }

// fontSizeControlEl.addEventListener("input", handlerChangeFontSize);

// =========================================================================
// exercise 8
// const formElement = document.querySelector(".login-form");
// const emailElement = document.querySelector('[name="email"]');
// const passwordElement = document.querySelector('[name="password"]');

// function handlerSubmit(event) {
//   let user = {};

//   if (emailElement.value === "" || passwordElement.value === "") {
//     alert("Пожалуйста, заполните данные для входа");
//   } else {
//     user.name = formElement.elements.email.value;
//     user.password = formElement.elements.password.value;

//     console.log(user);
//     event.preventDefault();
//     formElement.reset();
//   }
// }

// formElement.addEventListener("submit", handlerSubmit);

// =========================================================================
// exercise 9
// const bodyElement = document.querySelector("body");
// const nameOfColorEl = document.querySelector(".color");
// const changeColorBtnEl = document.querySelector(".change-color");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function handlerChangeBodyColor() {
//   let color = getRandomHexColor();

//   nameOfColorEl.textContent = color;
//   bodyElement.style.background = color;
// }

// changeColorBtnEl.addEventListener("click", handlerChangeBodyColor);

// ========================================================================
// exercise 10
// const amountOfElements = document.querySelector('[type="number"]');
// const createBtnEl = document.querySelector("[data-create]");
// const destroyBtnEl = document.querySelector("[data-destroy]");
// const mainDivEl = document.querySelector("#boxes");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function createBoxes(amount) {
//   let widthElement = 30;
//   let heightElement = 30;

//   for (let i = 0; i < amount; i++) {
//     let newDivElement = document.createElement("div");
//     let color = getRandomHexColor();

//     newDivElement.style.cssText = `
//       width: ${widthElement}px;
//       height: ${heightElement}px;
//       background-color: ${color};
//     `;

//     mainDivEl.append(newDivElement);

//     widthElement += 10;
//     heightElement += 10;
//   }
// }

// function destroyBoxes() {
//   [...mainDivEl.children].forEach((elem) => {
//     elem.remove();
//   });
// }

// createBtnEl.addEventListener("click", () => {
//   let amount = Number(amountOfElements.value);
//   createBoxes(amount);
// });

// destroyBtnEl.addEventListener("click", destroyBoxes);
