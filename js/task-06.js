const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  console.log(input.value.length);
  if (input.value.length < input.getAttribute("data-length")) {
    input.classList = "invalid";
  } else input.classList = "valid";
});
