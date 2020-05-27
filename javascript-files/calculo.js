/* Obrigado Jarom */

function saudacao(nome) {

  var nome = document.getElementById("nome").value;
  var ola;
  ola = alert("Olá " + nome);
  document.getElementById("nome").value = ola;

}

function dobro(num) {

  var num = document.getElementById("numero").value;
  var result;
  result = num * 2;
  document.getElementById("numero").value = result;

}

function metade(num) {

  var num = document.getElementById("numero").value;
  var result;
  result = num / 2;
  document.getElementById("numero").value = result;

}