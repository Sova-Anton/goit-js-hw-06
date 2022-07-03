const inputEl = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    nameLabel.textContent = "Anonymous";
  } else {
    nameLabel.textContent = event.currentTarget.value;
  }
}

inputEl.addEventListener("input", onInputChange);
