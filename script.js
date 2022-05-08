let valorConta = document.querySelector("#bill");

/* parseFloat() */

const button = document.querySelectorAll("botao");

/*
let gorjetaCustomizada = document.querySelector("#gorjeta_customizada").value;
let numeroPessoas = document.querySelector("#number_people").value;

let gorjetaPorPessoa = (valorConta * quantidadeGorjeta) / 100 / numeroPessoas;

let totalPorPessoa = valorConta / numeroPessoas + gorjetaPorPessoa;

function mostraValor(span) {
  span.textContent = gorjetaPorPessoa;
}
 */

button.forEach((botao) => {
  botao.addEventListener("click", selecionarGorjeta);
});

function selecionarGorjeta(evento) {
  button.forEach((botao) => {
    botao.classList.remove("active");
    if (evento.target.innerHTML === botao.innerHTML) {
      botao.classList.add("active");
      quantidadeGorjeta = parseFloat(botao.innerHTML) / 100;
      console.log(quantidadeGorjeta);
    }
  });
}
