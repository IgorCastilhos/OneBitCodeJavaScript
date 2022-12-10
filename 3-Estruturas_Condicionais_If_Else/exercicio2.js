const atacante = prompt("Insira o nome do atacante: ");
const poderDeAtaque = prompt("Insira o Poder de Ataque do personagem 1: ");

const defensor = prompt("Insira o nome do personagem 2: ");
let pontosDeVida = prompt("Insira a quantidade de Pontos de Vida: ");
const poderDeDefesa = prompt("Insira o Poder de Defesa do personagem 2: ");
const possuiEscudo = prompt("O personagem 2 possui escudo? (Sim/Não)");

let danoCausado = 0;

  if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante + "\nPoder de Ataque: " + poderDeAtaque + "\n\n" + 
  defensor + "\nPontos de Vida: " + pontosDeVida + 
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui Escudo: " + possuiEscudo
);