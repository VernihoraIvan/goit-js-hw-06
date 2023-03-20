const form = document.querySelector(".login-form");
console.log(form.elements);
const inputEmail = document.querySelector("form.elements.email.value");
console.log(form.elements.password.value);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (form.elements.email.value === "" || form.elements.password.value === "") {
    return alert("Bci поля повинні бути заповнені");
  }
  const formObject = {};
  formObject.email = form.elements.email.value;
  formObject.password = form.elements.password.value;
  console.log(formObject);
  console.log(event.currentTarget);
  event.currentTarget.reset();
}
