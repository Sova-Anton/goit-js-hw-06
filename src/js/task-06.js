const input = document.querySelector("input#validation-input");

function validationInput(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");

    return input.classList.add("valid");
  } else {
    input.classList.remove("valid");

    return input.classList.add("invalid");
  }
}

input.addEventListener("blur", validationInput);
