function loginValidation(checkValid) {
    let username = document.getElementById("userid").value;
    let password = document.getElementById("password").value;
    checkValid(username,password);
} 
function ifValid(uname,pwd) {
        if (uname == "admin" && pwd == "12345") {
            alert("You are a valid user..");
            
            document.querySelector("form").action = "./todo.html";
        }
        else {
            alert("Invalid user");
        }
}

function onLogin() {
    loginValidation(ifValid);
} 