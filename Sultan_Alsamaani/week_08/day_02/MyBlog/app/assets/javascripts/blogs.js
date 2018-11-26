// URL || Path
//   /todos
// Method
//  GET
// Data Type
//   JSON (make sure it sends back JSON)
//  Params  || Body
// NONE
//   These are the things that you should be looking for:
// Required Parameters (API Key, etc.)
// Optional Parameters (search terms, etc.)

// GET  /todos, asking for JSON with no body/params

function responseToJson(response) {
    return response.json();
}

function displayAllBlogs(data) {
    const listItems = data
        .map(function (blog) {
            return `
        <li id="blog-${blog.id}">
        ${blog.title}
        </li>
        `;
        })
        .join("");
    const allBlogsDiv = document.querySelector("#all-blogs");
    allBlogsDiv.innerHTML = `<ul>${listItems}</ul>`;
}

function getAllBlogs() {
    fetch("/blogs")
      .then(responseToJson)
      .then(displayAllBlogs);
}

function displayBlog(data) {
    var result = `
        <h2> blog ${data.id} </h2>
        <p>  ${data.title} </p>
        <p> content: ${data.content} </p>
        <p> created at: ${data.created_at} </p>
        `;
    const BlogDiv = document.querySelector("#show-blog");
    BlogDiv.innerHTML = `${result}`;
}
function getBlog(id) {
  fetch("/blogs/" + id)
    .then(responseToJson)
    .then(displayBlog);
}


function addNewBlog(title,content) {
    fetch("/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ title: title, content: content })
    })
      .then()
      .then(function() {
        getAllBlogs();
      });
}

window.onload = function () {
    getAllBlogs();


    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = document.querySelector("#new-blog-title");
        const title = input.value;
        const input2 = document.querySelector("#new-blog-content");
        const content = input2.value;
        input.value = "";
        input2.value = "";
        //   console.log(content);
        addNewBlog(title,content);
    });





    const showBlogDiv = document.querySelector("#all-blogs");
    showBlogDiv.addEventListener("click", function (e) {
        const clickedLi = e.target;
        const id = clickedLi.id.replace("blog-", "");
        getBlog(id);
    });
};
