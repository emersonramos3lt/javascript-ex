const visa = document.getElementById("visa");
const master = document.getElementById("master");
const paypal = document.getElementById("paypal");
const mysubmit = document.getElementById("mysubmit");
const text = document.getElementById("text");

mysubmit.onclick = function() {
    if (visa.checked) {
        text.textContent = `Seu pagamento foi efetuado com o cartão Visa`
    }

    else if (master.checked) {
        text.textContent = `Seu pagamento foi efetuado com o cartão MasterCard`
    }

    else if (paypal.checked) {
        text.textContent = `Seu pagamento foi efetuado com o cartão PayPal`
    }

    else {
        text.textContent = `Escolha entre as opções acima`
    }
}