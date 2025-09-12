document.querySelectorAll(".faqTitle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const body = btn.nextElementSibling;

    btn.classList.toggle("open");
    body.classList.toggle("active");

    document.querySelectorAll(".faqBody").forEach((check) => {
      if (body !== check) {
        check.classList.remove("active");
        check.previousElementSibling.classList.remove("open");
      }
    });
  });
});

document.querySelectorAll(".faqKateqoriyalar li").forEach((listElement) => {
  listElement.addEventListener("click", () => {
    listElement.classList.add("changeBorder");

    const btn = listElement.firstElementChild;

    btn.classList.add("changeColor");

    document.querySelectorAll(".faqKateqoriyalar li").forEach((check) => {
      if (check !== listElement) {
        check.classList.remove("changeBorder");
        const btn = check.firstElementChild;

        btn.classList.remove("changeColor");
      }
    });
  });
});

document.querySelectorAll(".headerLeft button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("buttonChange");

    document.querySelectorAll(".headerLeft button").forEach((check) => {
      if (check !== btn) {
        check.classList.remove("buttonChange");
      }
    });
  });
});

document.querySelectorAll(".links li").forEach((listElementLinks) => {
  listElementLinks.addEventListener("click", () => {
    listElementLinks.classList.add("linkClicked");
  });
});
