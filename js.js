localStorage.setItem("user", "admin");
localStorage.setItem("pw", "admin");
document.querySelector("#btEntrar").addEventListener("click", function () {
    console.log("Usuário e senha: admin");
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    if(username.value == localStorage.getItem("user") && password.value == localStorage.getItem("pw")){
        alert("Login realizado com sucesso!");
        
    } else{
        alert("Usuário ou senha inválidos! (Olhar console)");
    }
});