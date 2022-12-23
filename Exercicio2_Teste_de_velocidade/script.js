const nomeVeiculo1 = prompt("Insira o nome do veículo 1: ");
const velocidadeVeiculo1 = prompt("Insira a velocidade do veículo 1: ");

const nomeVeiculo2 = prompt("Insira o nome do veículo 2: ");
const velocidadeVeiculo2 = prompt("Insira a velocidade do veículo 2: ");

if (velocidadeVeiculo1 > velocidadeVeiculo2) {
  alert(nomeVeiculo1 + " é mais rápido do que " + nomeVeiculo2)
} else if (velocidadeVeiculo1 < velocidadeVeiculo2) {
  alert (nomeVeiculo2 + " é mais rápido do que " + nomeVeiculo1)
} else {
  alert ("A velocidade do veículo 1 e 2 são iguais")
}