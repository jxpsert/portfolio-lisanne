const grid = document.querySelector("#blog-grid");

const addPost = (date, title, content) => {
  const post = document.createElement("div");
  // Format date to "month day, year"
  const formattedDate = new Date(date)
    .toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .toLowerCase();
  post.classList.add("blog-post");
  post.innerHTML = `
        <h1>${title}</h1>
        <span class="monospace italic">${formattedDate}</span>
        <p class="monospace">${content.replace("\n", "<br>")}</p>
        <hr>
    `;
  grid.appendChild(post);
};

const getPosts = async () => {
  const postsapi =
    "https://0v4j861z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blogpost%22%5D";
  const posts = await fetch(postsapi);
  const data = await posts.json();

  data.result.forEach((post) => {
    console.log(post);
    addPost(post.date, post.title, post.content);
  });

  if (data.result.length == 0) {
    const post = document.createElement("div");
    post.classList.add("blog-post");
    post.innerHTML = `
        <h1>No blog posts yet</h1>
        <span class="monospace italic">Check back later</span>
    `;
    grid.appendChild(post);
  }
};

getPosts();
