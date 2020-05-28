function pulaLinha() {

  document.write("<br> <br>");

}

function mostra(frase) {

  document.write(frase);
  pulaLinha();

}

// primeira parte dividir as laranjas pelo n de vizinhos //

function divideLaranjas( laranjas, vizinhos) {

  return laranjasRepartidas = (laranjas / vizinhos);

}

function sobraLaranjas( laranjas, vizinhos) {

  return laranjasExcesso = laranjas % vizinhos;

}

var numeroLaranjas = prompt("Informe o numero de laranjas");
var numeroVizinhos = prompt("Informe o numero de vizinhos");

var laranjasRepartidas = Math.floor(divideLaranjas( numeroLaranjas, numeroVizinhos));
var laranjasExcesso = sobraLaranjas( numeroLaranjas, numeroVizinhos );

if (laranjasRepartidas > 1) {
  mostra("Cada vizinho recebeu " + laranjasRepartidas + " laranjas de Joselito.");
}else {
  mostra("Cada vizinho recebeu uma laranja de Joselito.");
};

mostra("Joselito manteve " + laranjasExcesso + " laranjas.");

// segunda parte mostrar o excesso de laranjas //