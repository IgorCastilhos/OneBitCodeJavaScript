// Escopo externo fica disponível no interno
let pokemon =  "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}

console.log(pokemon); // imprime Charmander
evoluir();
console.log(pokemon); // imprime Charmeleon


// Escopo interno não fica disponível no externo
// function criarAnimal() {
//   let animal = "Gato"
// }

// criarAnimal()
// console.log(animal); // Erro

function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true
    let situacao = "Aprovado"
  } else {
    var aprovado = false
    let situacao = "Reprovado"
  }
  
  console.log(nota);
  console.log(aprovado);
  console.log(situacao);
}

avaliarNota(83)
avaliarNota(49)