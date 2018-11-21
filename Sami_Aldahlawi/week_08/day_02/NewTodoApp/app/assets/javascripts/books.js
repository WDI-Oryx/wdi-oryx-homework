// GET /books, asking for JSON with no body/params

//URL
//METHOD
//Data type


function responseToJSON(response){
  return response.json();
}


function displayAllBooks(data){
    var divBooks = document.querySelector("#all-books");
    let htmlAllBooks = "";
    for(let book of data){
        htmlAllBooks += `<li>${book.title}</li>`;
    }
    divBooks.innerHTML = htmlAllBooks;
}


function getAllBooks(){
    fetch("/books",{method:"GET",datatype:"json"})
    .then(responseToJSON)
    .then(displayAllBooks);    
}

function addBook(val){
    const allB = document.querySelector("#all-b");
    allB.innerHTML += `<li>${val}</li>`;
}

window.onload= function(){   
getAllBooks();
const divAllBooks = document.querySelector("#all-books");
const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    addBook(input.value);
});
divAllBooks.addEventListener("click",function(ev){
    
});

console.log(divAllBooks);
};

