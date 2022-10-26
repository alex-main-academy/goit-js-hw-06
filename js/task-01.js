const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((elem) => {
  console.log(`Category: ${elem.firstChild.nextSibling.innerText}`);
  console.log(
    `Elements: ${elem.firstChild.nextSibling.nextSibling.nextSibling.children.length}`
  );
});
