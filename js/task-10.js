const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");
const input = document.querySelector("input");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let sidesSizes = 20; /*Вынесли из функции чтобы дивы добавлялись при каждом нажатии*/

function createBoxes() {
  const numberArray = [];
  for (let i = 1; i <= input.value; i += 1) {
    numberArray.push(i);
  }

  const boxes = numberArray.map((number) => {
    sidesSizes += 10;
    const createBox = document.createElement("div");
    createBox.style.width = sidesSizes + "px";
    createBox.style.height = sidesSizes + "px";
    createBox.style.backgroundColor = getRandomHexColor();

    return createBox;
  });

  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
  input.value = "";
  sidesSizes = 20; /* чтобы после обнуления сбросились размеры дивов */
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
