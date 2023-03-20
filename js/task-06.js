const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  console.log(input.value.length);
  console.log(input.getAttribute("data-length"));
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    input.classList = "valid";
  } else input.classList = "invalid";
});
