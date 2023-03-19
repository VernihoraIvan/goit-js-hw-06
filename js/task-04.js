let counterValue = document.querySelector("#value");

let currentValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');

const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonDecrement.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

buttonIncrement.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
