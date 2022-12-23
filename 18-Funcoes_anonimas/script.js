function somar(a, b) {
  return a + b;
}

let operacao = somar

console.log(operacao(4, 5));

operacao = function (a, b) {
  return a - b;
}
console.log(operacao(4, 5));

// Perigo das funções anônimas

olaMundo()
oiMundo()

function olaMundo() {
  console.log("Olá, mundo!");
}

const oiMundo = function () {
  console.log("Oi, mundo")
}