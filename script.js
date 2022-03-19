var numeroSecreto = parseInt(Math.random() * 10);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    var comparacao = document.getElementById("resultado");
    var resultado = "Você acertou!";
    comparacao.innerHTML = resultado;
  } else if (chute > 10 || chute < 0) {
    var comparacao3 = document.getElementById("resultado");
    var resultado3 = "Coloque um numero de 0 a 10";
    comparacao3.innerHTML = resultado3;
  } else {
    var comparacao2 = document.getElementById("resultado");
    var resultado2 = "Você errou!";
    comparacao2.innerHTML = resultado2;
  }
}