const currentCounter = document.querySelector("#value");
const increment = document.querySelector("[data-action='increment']");
const decrement = document.querySelector("[data-action='decrement']");

currentCounter.innerHTML = 0;

function incrementNumber() {
  currentCounter.innerHTML++;
}
function decrementNumber() {
  currentCounter.innerHTML--;
}

increment.addEventListener("click", incrementNumber);
decrement.addEventListener("click", decrementNumber);
