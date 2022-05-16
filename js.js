localStorage.setItem("user", "admin");
localStorage.setItem("pw", "admin");
document.querySelector("#btEntrar").addEventListener("click", function () {
    console.log("Usuário e senha: admin");
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    if(username.value == localStorage.getItem("user") && password.value == localStorage.getItem("pw")){
        alert("Login realizado com sucesso!");
        let sectionLogin = document.querySelector(".login");
        sectionLogin.innerHTML = "";
        sectionLogin.style.display = "none";
        let txt = document.createElement("h4");
        txt.innerHTML = "Entre com o nome do pokémon:";
        document.body.appendChild(txt);
        let br = document.createElement("br");
        document.body.appendChild(br);
        let input = document.createElement("input");
        document.body.appendChild(input);
        let button = document.createElement("button");
        button.innerHTML = "Pesquisar";
        document.body.appendChild(button);
        let list = document.createElement("ul");
        for(let i = 0; i < 10; i++){
            let search = document.createElement("li");
            let text = document.createTextNode("Teste");
        }
        
    } else{
        alert("Usuário ou senha inválidos! (Olhar console)");
    }
});