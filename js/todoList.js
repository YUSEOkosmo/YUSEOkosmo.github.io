const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const todoInput = todoForm.querySelector("input");

let todos = [];

const TODOS_KEY = "TODOs";

function saveTODOs(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}
function removeTODO(event){
    const target_li = event.target.parentElement;
    target_li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(target_li.id));
    saveTODOs();
}

function writeTODOonPage(todo){
    const li = document.createElement("li");
    
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = `${todo.text}　　`;

    const button = document.createElement("button");
    button.innerText = "❌Remove";
    
    button.addEventListener("click", removeTODO);
    li.appendChild(span);
    li.appendChild(button);
    
    todoList.appendChild(li);
}

const savedTODOs = localStorage.getItem(TODOS_KEY);

if(savedTODOs !== null){
    const parsedTODOs = JSON.parse(savedTODOs);
    todos = parsedTODOs;
    parsedTODOs.forEach(writeTODOonPage);
    
}

function handleTodoForm(event){
    event.preventDefault();
    const myTodo = todoInput.value;
    todoInput.value = "";
    const todoObject = {
        text: myTodo,
        id: Date.now()
    };
    todos.push(todoObject);
    writeTODOonPage(todoObject);
    saveTODOs();
}

todoForm.addEventListener("submit", handleTodoForm);
