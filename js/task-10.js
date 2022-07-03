/* Не знаю как сделать чтобы при повторном клике дивы создавались не со 
стартовых размеров... */

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");
const input = document.querySelector("input");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const numberArray = [];
  for (let i = 1; i <= input.value; i += 1) {
    numberArray.push(i);
  }

  const boxes = numberArray.map((number) => {
    const createBox = document.createElement("div");
    createBox.style.width = `${20 + number * 10}px`;
    createBox.style.height = `${20 + number * 10}px`;
    createBox.style.backgroundColor = getRandomHexColor();

    return createBox;
  });

  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
