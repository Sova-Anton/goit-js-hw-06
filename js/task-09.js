function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColorise = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

buttonColorise.addEventListener("click", onChangeColor);

function onChangeColor() {
  let color = getRandomHexColor();
  body.setAttribute('style', `background-color: ${color}`)
  span.textContent = color;
}

// buttonColorise.addEventListener("click", onButtonColoriseClick);

// function onButtonColoriseClick() {
//   body.style.background = getRandomHexColor();
//   span.textContent = getRandomHexColor();
// }
