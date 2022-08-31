const conta = document.querySelector('#bill');
const button = document.querySelectorAll('.botao');
const gorjetaCustomizada = document.querySelector('#gorjeta_customizada');
const numeroPessoas = document.querySelector('#number_people');
const resultados = document.querySelectorAll('.resultado');
const erro = document.querySelector('.erro');

let contaValor = 0.0; // valor padrão
let quantidadeGorjeta = 0.1;
let pessoas = 1;
let valorGorjeta = 0;
let total = 0;

/* VALOR CONTA */
function setarValorConta() {
  contaValor = parseFloat(conta.value);

  calculaGorjeta();
}

conta.addEventListener('input', setarValorConta);

/* GORJETA */
function selecionarGorjeta(event) {
  event.preventDefault();
  button.forEach((botao) => {
    botao.classList.remove('active');
    if (event.target.innerHTML === botao.innerHTML) {
      botao.classList.add('active');
      quantidadeGorjeta = parseFloat(botao.innerHTML) / 100;
    }
  });

  gorjetaCustomizada.value = '';

  calculaGorjeta();
}

button.forEach((botao) => {
  botao.addEventListener('click', selecionarGorjeta);
});

function valorGorjetaCustomizada() {
  quantidadeGorjeta = parseFloat(gorjetaCustomizada.value / 100);

  calculaGorjeta();
}
gorjetaCustomizada.addEventListener('click', () => {
  button.forEach((botao) => {
    botao.classList.remove('active');
  });
});
gorjetaCustomizada.addEventListener('input', valorGorjetaCustomizada);

/* PESSOAS */
function numeroDePessoas() {
  pessoas = numeroPessoas.value;

  calculaGorjeta();
}

numeroPessoas.addEventListener('input', numeroDePessoas);

/* CALCULO GORJETA */
function calculaGorjeta() {
  if (pessoas >= 1) {
    erro.style.display = 'none';
    let valorGorjeta = (contaValor * quantidadeGorjeta) / pessoas;
    let total = (contaValor * (quantidadeGorjeta + 1)) / pessoas;
    resultados[0].innerHTML = '$' + valorGorjeta.toFixed(2);
    resultados[1].innerHTML = '$' + total.toFixed(2);
  } else if (pessoas < 1) {
    erro.style.display = 'block';
  }
}
