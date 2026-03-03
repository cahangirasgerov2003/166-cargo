let result = document.querySelector(".result");
let api = "https://jsonplaceholder.typicode.com/posts";
let showButton = document.querySelector(".showButton");
let filterButton = document.querySelector(".filterButton");
let deleteButton = document.querySelector(".deleteButton");
let addNewPost = document.querySelector(".addNewPost");
let title = document.querySelector("#title");
let desc = document.querySelector("#desc");
let userId = document.querySelector("#userId");

let postObj = null;

async function addPost() {
  let titleValue = title.value;
  let bodyValue = desc.value;
  let userIdValue = userId.value;

  if (titleValue.length < 10 || bodyValue.length < 50 || userIdValue <= 0) {
    console.error("Title, body və ya user id standartlara uyğun deyil !");
    result.innerHTML = `<p style="text-align:center; color: yellow; font: bold 20px sans-serif">Title, body və ya user id standartlara uyğun deyil !</p>`;

    return;
  }

  postObj = {
    title: titleValue,
    body: bodyValue,
    userId: userIdValue,
  };

  try {
    let response = await fetch(`${api}`, {
      method: "POST",
      body: JSON.stringify(postObj),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      console.error(
        `${api} bu ünvana sorğu atan zaman gözlənilməz xəta baş verdi !!!!`,
      );
      return;
    }

    let data = await response.json();

    console.log(data);

    result.innerHTML = `<p style="text-align:center; color: green; font: bold 20px sans-serif">Your post added successfully !</p>`;
  } catch (err) {
    console.error(err);
    result.innerHTML = "";
    let p = document.createElement("p");
    p.style.marginTop = "30px";
    p.style.textAlign = "center";
    p.style.color = "white";
    p.innerHTML = err;
    result.appendChild(p);
  } finally {
    title.value = "";
    desc.value = "";
    userId.value = "";
  }
}

addNewPost.addEventListener("click", (e) => {
  e.preventDefault();
  addPost();
});

showButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/post.html";
});

filterButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/filter.html";
});

deleteButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/delete.html";
});
