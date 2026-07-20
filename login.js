const USERNAME = "clent";
const PASSWORD = "portfolio123";

document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if(
        username === USERNAME &&
        password === PASSWORD
    ){

        localStorage.setItem("loggedIn","true");

        window.location.href = "portfolio.html";

    }else{

        document.getElementById("error").textContent =
        "Incorrect username or password.";
    }

});