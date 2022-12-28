const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Sort (ordenação)

//1 , 2 , 4, 7, 3 (ele vai comparar esses elementos de 2 em 2 e a partir dessa comparação, ele vai reordenando eles). Se quisermos usar o sort, é muito comum usarmos o slice() antes, que retorna uma cópia de uma parte do Array, criando um novo Array.
console.log(personagens);

const personagensOrdenados = personagens.sort(function (a, b) {
  return b.nivel - a.nivel; // Se essa conta der positivo, ele vai jogar o elemento pro final do Array, se der negativo ele será jogado para o início
})
console.log(personagensOrdenados);