const arr = [
  "1º Nível",
  ["2º Nível", 42, true],
  [
    ["3º Nível, 1º item", "Olá, mundo!"],
    ["3º Nível, 2º item", "Oi, mundo!"],
  ],
  []
]

console.log(arr); // Array completo
console.log(arr[0]); // 1ª Nível
console.log(arr[1][0]); // 2º Nível
console.log(arr[1][1]); // 42
console.log(arr[2]); // Array com 2 Arrays dentro
console.log(arr[2][1]); // ["3º Nível, 2º item", "Oi, mundo!"]
console.log(arr[2][1][0]); // 3º Nível, 2º item

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

console.table(matriz) // Método table transforma os dados em uma tabela no console;

matriz.push(["Nova linha"]) // Na posição de baixo, ele criou uma nova linha, que é um novo elemento
matriz[0].push("Nova coluna") // Na posição 0, no último elemento dela, que agora é o 4, ela criou uma nova coluna

console.table(matriz)

for (let i = 0; i < matriz.length; i++) { 
  // let i = 0; ele vai aumentar i < enquanto ele for menor que o tamanho da matriz(length), que é o array mais externo, ao fim, aumentando +1. Caso você dê um console.log, verá que ele iterou sobre cada um dos arrays internos, mostrando o array inteiro. Agora para iterar sobre cada elemento da matriz, é só fazer um for dentro do for. Para cada uma das linhas, é criada outra repetição que vai passar por cada uma das colunas.
  for (let j = 0; j < matriz[i].length; j++) {
    // let j = 0. Por quê 0? Pq o índice começa em 0. Continua enquanto j < matriz[i].length (menor do que o Array mais interno, por isso o [i] e o seu tamanho (length)). A constante element vai ser igual a matriz na posição [i] e [j], assim a gente pega a matriz na linha dinâmica e na coluna dinâmica, pegando todos os elementos. O [i] passa a ser o número da coluna e o [j] a posição na linha.
    const element = matriz[i][j];
    console.log("Posição: (" + i + ", " + j + ") Valor: " + element);
  }
}