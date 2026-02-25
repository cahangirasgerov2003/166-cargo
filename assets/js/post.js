let showButton = document.querySelector(".showButton");
let result = document.querySelector(".result");
let api = "https://jsonplaceholder.typicode.com/posts";

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

    if (data.length > 10) {
      slicedData = data.slice(0, 10);
    }

    slicedData.forEach((item) => {
      let div = document.createElement("div");
      div.className = "col-sm-3 aboutPost";
      div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
               <h5 class="card-title">${item.title.length > 20 ? item.title.slice(0, 17) + "..." : item.title}</h5>
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

showButton.addEventListener("click", () => {
  getPosts();
});
