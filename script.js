let valorConta = document.querySelector("#bill").value;
let quantidadeGorjeta = document.querySelector(
  'input[name="tip_amount"]:checked'
).value;
let gorjetaCustomizada = document.querySelector("#gorjeta_customizada").value;
let numeroPessoas = document.querySelector("#number_people").value;

let gorjetaPorPessoa = (valorConta * quantidadeGorjeta) / 100 / numeroPessoas;

let totalPorPessoa = valorConta / numeroPessoas + gorjetaPorPessoa;

/* function mostraValor(span) {
  span.textContent = gorjetaPorPessoa;
}
 */
