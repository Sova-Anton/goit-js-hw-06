const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

function changeFontSize() {
  span.style.fontSize = `${input.value}px`;
}

input.addEventListener("input", changeFontSize);

// input.addEventListener(
//   "input",
//   () => (span.style.fontSize = `${input.value}px`)
// );
