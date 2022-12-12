// let velocity = 80

// while (velocity > 0) {
//   alert("O carro está a " + velocity + " km/h")
//   velocity -= 20
//   alert("Diminuindo 20 km/h")
// }

// Exercício

const touristName = prompt("Insira o nome do turista: ");
let cidades = "";
let count = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
  let cidade = prompt("Insira o nome da cidade visitada: ");
  // cidades = cidades + ...
  cidades += " - " + cidade + "\n";
  count++;
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}
alert(
  "Nome do turista: " + touristName + 
  "\nNúmero de cidades visitadas: " + count + 
  "\nCidades visitadas:\n" + cidades
);