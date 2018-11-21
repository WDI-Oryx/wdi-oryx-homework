
function responseToJSON(response){
    return response.json();
}


function displayData(data){
    const listItems = data.map(function(val){
        return `<li id="todo-${val.id}">${val.content}</li>`;
    }).join("");
    const allVal = document.querySelector("#all-todos");
    allVal.innerHTML = `<ul>${listItems}</ul>`;
}
function getAllTodos(){
    fetch("/todos")
    .then(responseToJSON)
    .then(displayData);
}

// getAllTodos();
// setInterval(getAllTodos, 2000); // Polling



function displayTodo(data){

        const a =  `
        <li>${data.content}</li>
        <p>`;
   
    const allVal = document.querySelector("#todo");
    allVal.innerHTML = `<ul>${a}</ul>`;

}

function todo(id){
    fetch("/todos/" + id)
    .then(responseToJSON)
    .then(displayTodo);
}

function saveTodo(info){
    fetch("/todos",{
        method:"POST",
        body: {favNum : 42}
    });
}


window.onload = function () {
    getAllTodos();
    const form = document.querySelector("form");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const input = document.querySelector("#new-todo");
        const content = input.value;
        saveTodo(content);
    });
   const allTodosDiv = document.querySelector("#all-todos");
  allTodosDiv.addEventListener("click", function(e) {
      const clickedLi = e.target;
      const id = clickedLi.id.replace("todo-","");
    todo(id)

  });
};


