let api = "https://jsonplaceholder.typicode.com/posts";
let result = document.querySelector(".result");
let showButton = document.querySelector(".showButton");
let filterButton = document.querySelector(".filterButton");
let deleteButton = document.querySelector(".deleteButton");
let addButton = document.querySelector(".addButton");
let postId = document.querySelector("#postId");
let title = document.querySelector("#title");
let desc = document.querySelector("#desc");
let userId = document.querySelector("#userId");
let editPost = document.querySelector(".editPost");
let postIdError = document.querySelector(".postIdError");
let titleError = document.querySelector(".titleError");
let descError = document.querySelector(".descError");
let userIdError = document.querySelector(".userIdError");

async function updatePost() {
  let titleValue = title.value;
  let descValue = desc.value;
  let userIdValue = userId.value;
  let postIdValue = postId.value;

  if (postIdValue < 0 || postIdValue.length === 0) {
    postIdError.innerHTML = "Id mütləq müsbət və ya 0 olmalıdır !";
    return;
  } else {
    postIdError.innerHTML = "";
  }

  if (titleValue.length < 5) {
    titleError.innerHTML = "Title minimum 5 simvol olmalıdır !";
    return;
  } else {
    titleError.innerHTML = "";
  }

  if (descValue < 20) {
    descError.innerHTML = "Description minimum 20 simvol olmalıdır !";
    return;
  } else {
    descError.innerHTML = "";
  }

  if (userIdValue < 0 || userIdValue.length === 0) {
    userIdError.innerHTML = "User id mütləq müsbət və ya 0 olmalıdır !";
    return;
  } else {
    userIdError.innerHTML = "";
  }

  try {
    let rawData = await fetch(`${api}/${postIdValue}`, {
      method: "PUT",
      body: JSON.stringify({
        id: postIdValue,
        title: titleValue,
        body: descValue,
        userId: userIdValue,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    let data = await rawData.json();

    console.log(data);

    result.innerHTML =
      "<small style='text-align:center; color:green; font: bold 20px sans-serif'>Put əməliyyatı uğurla sonlandı !</small>";
  } catch (error) {
    console.error(error);
    result.innerHTML = `<small style='text-align:center; color:red; font: bold 20px sans-serif'>${error}</small>`;
  } finally {
    title.value = "";
    desc.value = "";
    userId.value = "";
    postId.value = "";
  }
}

showButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/post.html";
});

filterButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/filter.html";
});

deleteButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/delete.html";
});

addButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/addPost.html";
});

editPost.addEventListener("click", (e) => {
  e.preventDefault();
  updatePost();
});
