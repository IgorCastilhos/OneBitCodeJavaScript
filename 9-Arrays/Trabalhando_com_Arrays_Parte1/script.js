const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr);

// Adicionar Elementos no final do Array
// push ()
let tamanho = arr.push("Boromir")
console.log(arr);
console.log(tamanho);

// unshift
tamanho = arr.unshift("Teste")
console.log(arr);
console.log(tamanho);

// Remover Elementos 
// pop (remove o útlimo Elemento)
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift (remove o primeiro Elemento)
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// Pesquisar por um Elemento
// includes (retorna true ou false caso o elemento esteja ou não no array)
const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf (pesquisa o índice de um elemento)
const indice = arr.indexOf("Gandalf")
console.log(indice);

// Cortar
// slice (copia e cria uma cópia do array a partir de posição x, sem apagar o Array original)
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr);
console.log(hobbits);
console.log(outros);

// Concatenar Elementos
// concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição dos Elementos ou Remover eles por "nada"
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os Elementos (Exibir no console todos os elementos do Array)
for (let indice = 0; indice < sociedade.length; indice++){
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice)
}