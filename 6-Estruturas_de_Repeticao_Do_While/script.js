// let velocidade = 0;

// do {
//   alert("A velocidade do veículo é " + velocidade + " km/h")
//   velocidade -= 20;
// } while (velocidade > 0);

// alert ("Velocidade final: " + velocidade + " km/h");

//Exercício 1

// let opcao = "5"

// do {
//   opcao = prompt(
//     "Seja bem-vindo(a)\n" +
//     "\nEscolha uma das opções abaixo:" +
//     "\n1. Opção Um" +
//     "\n2. Opção Dois" +
//     "\n3. Opção Três" + 
//     "\n4. Opção Quatro" +
//     "\n5. Encerrar" 
//   )

//   switch (opcao) {
//     case "1":
//       alert("Você escolheu a opção 1")
//       break;
//     case "2":
//       alert("Você escolheu a opção 2")
//       break;
//     case "3":
//       alert("Você escolheu a opção 3")
//       break;
//     case "4":
//       alert("Você escolheu a opção 4") 
//       break;
//     case "5":
//       alert("Você escolheu encerrar.")
//       alert("Encerrando...")
//       break;
//     default:
//       alert("Opção Inválida!")
//   }

// } while (opcao !== "5")

// Exercício 2

let saldo = prompt("Informe a quantidade de dinheiro inicial: ");
saldo = parseFloat(saldo); 
let opcao = "";

do {
  opcao = prompt(
    "\nSaldo disponível: R$" + saldo +
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Sair"
  ) 
  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado: "))
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser removido: "));
      break;
    case "3":
      alert("Saindo...")
      break;
    default:
      alert("Opção Inválida!")
  }
} while (opcao !== "3");