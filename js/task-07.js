const rangeInput = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
rangeInput.addEventListener("input", (event) => {
  console.log(rangeInput.value);
  const inputNumber = Number(rangeInput.value);
  span.style.fontSize = `${inputNumber}px`;
});
