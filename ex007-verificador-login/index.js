const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const myButton = document.getElementById("myButton");
const text = document.getElementById("text");

myButton.onclick = function() {
    let loggedIn = false;
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "nome" && password === "1234") {
        loggedIn = true;
        text.textContent = `Seu login foi feito com sucesso`
    }

    else {
        text.textContent = `Dados inválidos`
    }
};