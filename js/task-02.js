const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElement = document.querySelector("#ingredients");

ingredients.map((elem) => {
  let listElement = document.createElement("li");
  listElement.textContent = elem;
  listElement.classList.add("item");
  ingredientsElement.append(listElement);
});
