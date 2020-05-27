function mostra(frase) {

  document.write(frase)

}

function pulaLinha() {

  mostra("<br><br>")

}

function escolhaAnimal() {

  var animal = "<i>Galiocerdo cuvier</i>"

  document.write("Num primeiro momento, eu gostaria de ser um: " + animal)

  pulaLinha()

  var animal = "<i>Poecilotheria metallica</i>"

  document.write("Pensando melhor, prefiro ser uma: " + animal )

}

escolhaAnimal()