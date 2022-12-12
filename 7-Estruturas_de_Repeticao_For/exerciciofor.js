// const numero = prompt("Digite um número");
// let tabuada;

// for (let i = 0; i < 20; i++) {
//   tabuada = numero * 1;
//   console.log(tabuada);
//   tabuada = numero * 2;
//   console.log(tabuada);
//   tabuada = numero * 3;
//   console.log(tabuada);
//   tabuada = numero * 4;
//   console.log(tabuada);
//   tabuada = numero * 5;
//   console.log(tabuada);
//   tabuada = numero * 6;
//   console.log(tabuada);
//   tabuada = numero * 7;
//   console.log(tabuada);
//   tabuada = numero * 8;
//   console.log(tabuada);
//   tabuada = numero * 9;
//   console.log(tabuada);
//   tabuada = numero * 10;
//   console.log(tabuada);
//   tabuada = numero * 11;
//   console.log(tabuada);
//   tabuada = numero * 12;
//   console.log(tabuada);
//   tabuada = numero * 13;
//   console.log(tabuada);
//   tabuada = numero * 14;
//   console.log(tabuada);
//   tabuada = numero * 15;
//   console.log(tabuada);
//   tabuada = numero * 16;
//   console.log(tabuada);
//   tabuada = numero * 17;
//   console.log(tabuada);
//   tabuada = numero * 18;
//   console.log(tabuada);
//   tabuada = numero * 19;
//   console.log(tabuada);
//   tabuada = numero * 20;
//   console.log(tabuada);
//   break
// }

// Resposta

const numero = prompt(
  "Olá, eu sou o Robô da Tabuada!\n" +
  "Informe o número que você deseja calcular a tabuada: "
)
let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n";
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)