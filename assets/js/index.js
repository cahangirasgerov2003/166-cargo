document.querySelectorAll(".faqTitle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const body = btn.nextElementSibling;

    body.classList.toggle("active");
  });
});
