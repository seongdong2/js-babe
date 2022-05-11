const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick(){
    const username = loginInput.value;
    if(username === ""){
        alert("fuck");
    } else if(username.length >= 15 ){
        alert("make it shorter");
    }
}

loginButton.addEventListener("click", handleLoginBtnClick);