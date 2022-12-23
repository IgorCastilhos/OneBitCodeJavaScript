function calcular(a, b, operacao) { // High-Order Function
  console.log("Realizando uma operação")
  const resultado = operacao(a, b) // somar(3, 5)
  return resultado
}

function somar(x, y) {
   console.log("Realizando uma soma.");
   return x + y
}

console.log(calcular(3, 5, somar))

// Conseguimos fazer com que a outra função se torne qualquer coisa

console.log(calcular(8, 4, function (x, y) { // Podemos criar uma função anônima aqui dentro
  console.log("Realizando uma subtração.");
  return x - y
}))

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}

// Isso <- === -> é igual a isso

lista.forEach(exibirElemento) // forEach é uma High Order Function

lista.forEach(function(elemento, indice, array) { // forEach usando uma função anônima como parâmetro
  console.log({
    elemento,
    indice,
    array
  })
})