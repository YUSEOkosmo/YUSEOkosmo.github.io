const loginInput = document.querySelector("#loginForm input")
const loginForm = document.querySelector("#loginForm ");
const userID = document.querySelector("#hello")
const logoutButton = document.querySelector("#logout");

const savedUserID = localStorage.getItem("userID");

const HIDDEN_CLASS = "hidden"
const USER_ID = "userID"

let nameVal = ""
function checkLoggedIn(){
    if(savedUserID === null){
        loginForm.classList.remove(HIDDEN_CLASS);
        loginForm.addEventListener("submit", getName);
        userID.innerText = "";
        userID.classList.add(HIDDEN_CLASS);
    }
    else{
        nameVal = savedUserID;
        showUser();
    }
}

checkLoggedIn();

function getName(event) {
    event.preventDefault();
    nameVal = loginInput.value;
    if(nameVal === ""){
        alert("pls put your name")
    } else{
        loginForm.classList.add(HIDDEN_CLASS);
        showUser();
        localStorage.setItem(USER_ID,nameVal);
    }
    
}

function doLogout(event){
    if(confirm("want logout?")){
        loginInput.value = ""
        loginForm.classList.remove(HIDDEN_CLASS);
        userID.innerText = "";
        userID.classList.add(HIDDEN_CLASS);
        logoutButton.classList.add(HIDDEN_CLASS);
        localStorage.removeItem(USER_ID,nameVal);
    }
}

function showUser(){
    userID.innerText = `WELCOME BACK!! ${nameVal}`
    userID.classList.remove(HIDDEN_CLASS);
    logoutButton.classList.remove(HIDDEN_CLASS);
}

logoutButton.addEventListener("click", doLogout);