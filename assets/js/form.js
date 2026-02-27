let colorInput = document.querySelector(".colorInput");
let body = document.querySelector("body");

colorInput.addEventListener("input", () => {
  body.style.backgroundColor = colorInput.value;
});
