const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");


function handleTodoForm(event){
    event.preventDefault();
}


todoForm.addEventListener("submit",handleTodoForm);