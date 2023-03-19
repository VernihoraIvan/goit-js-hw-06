function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divCollection = [];
const boxesNumber = divCollection.length;
const inputNumber = document.querySelector("input");

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
console.log(btnCreate);
const boxes = document.querySelector("#boxes");

const createBoxes = (event) => {
  const inputNumberValue = Number(inputNumber.value);
  let width = 30;
  let height = 30;
  for (let i = 0; i <= inputNumberValue; i += 1) {
    const divItem = document.createElement("div");
    console.log(divItem);
    divItem.style.width = `${width}px`;
    divItem.style.height = `${height}px`;
    divItem.style.backgroundColor = getRandomHexColor();
    divCollection.push(divItem);
    width += 10;
    height += 10;
  }
};

btnCreate.addEventListener("click", () => {
  inputNumber.value = "";

  boxes.append(...divCollection);
  divCollection = [];
});

inputNumber.addEventListener("blur", createBoxes);
btnDestroy.addEventListener("click", function destroyBoxes() {
  boxes.innerHTML = "";
});
