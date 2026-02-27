let showButton = document.querySelector(".showButton");
let result = document.querySelector(".result");
let api = "https://jsonplaceholder.typicode.com/posts";
let filterButton = document.querySelector(".filterButton");
let addButton = document.querySelector(".addButton");
let editButton = document.querySelector(".editButton");
let deletePost = document.querySelector(".deletePost");
let deletePostById = document.querySelector("#deletePostById");
let slicedData = [];

async function getPosts() {
  try {
    let response = await fetch(`${api}`, {
      method: "GET",
    });

    if (!response.ok) {
      console.error(
        `${api} bu ünvana sorğu atan zaman gözlənilməz xəta baş verdi !!!!`,
      );
      return;
    }

    let data = await response.json();

    console.log(data);

    if (data.length > 10) {
      slicedData = data.slice(0, 10);
    }

    slicedData.forEach((item) => {
      let div = document.createElement("div");
      div.className = "col-sm-3 aboutPost";
      div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
               <h5 class="card-title postCardTitle">${item.title.length > 20 ? item.title.slice(0, 17) + "..." : item.title}</h5>
               <p class="card-text">${item.body.length > 200 ? item.body.slice(0, 197) + "..." : item.body}</p>
               <a href="/blog.html" class="card-link">See more</a>
            </div>
        </div> 
      `;

      result.appendChild(div);
    });
  } catch (err) {
    console.error(err);
    let p = document.createElement("p");
    p.style.marginTop = "30px";
    p.style.textAlign = "center";
    p.style.color = "white";
    p.innerHTML = err;
    result.appendChild(p);
  }
}

async function deletePostByIdFunc() {
  try {
    let response = await fetch(`${api}/${deletePostById.value}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(
        `${api} bu ünvana sorğu atan zaman gözlənilməz xəta baş verdi !!!!`,
      );
      return;
    }

    let data = await response.json();

    console.log(data);

    result.innerHTML = `
    
    <div>
       <p class="text-center text-info">Post başarı ilə silindi !</p>
    </div>

    `;
  } catch (err) {
    console.error(err);
    let p = document.createElement("p");
    p.style.marginTop = "30px";
    p.style.textAlign = "center";
    p.style.color = "white";
    p.innerHTML = err;
    result.appendChild(p);
  } finally {
    deletePostById.value = "";
  }
}

showButton.addEventListener("click", () => {
  getPosts();
});

deletePost.addEventListener("click", () => {
  deletePostByIdFunc();
});

filterButton.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/filter.html";
});
