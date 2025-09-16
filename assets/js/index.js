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

    document.querySelectorAll(".links li").forEach((check) => {
      if (check !== listElementLinks) {
        check.classList.remove("linkClicked");
      }
    });
  });
});

document.querySelectorAll(".breadcrumbSection ul li a").forEach((selected) => {
  selected.addEventListener("click", () => {
    selected.classList.add("chosenOne");

    document.querySelectorAll(".breadcrumbSection ul li a").forEach((check) => {
      if (check !== selected) {
        check.classList.remove("chosenOne");
      }
    });
  });
});

document.querySelectorAll(".necəIsleyirikList div li").forEach((selected) => {
  selected.addEventListener("click", () => {
    const firstChild = selected.firstElementChild;
    selected.classList.add("chosed");
    firstChild.classList.add("selectedElement");

    document.querySelectorAll(".necəIsleyirikList div li").forEach((check) => {
      if (check !== selected) {
        check.classList.remove("chosed");
        check.firstElementChild.classList.remove("selectedElement");
      }
    });
  });
});
