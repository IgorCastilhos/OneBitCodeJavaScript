const medida = parseFloat(prompt("Digite um valor em metros"));

const unidade = prompt(
  "Escolha para qual unidade de medida esse valor deve ser convertido:" +
  "\n1 - milímetro (mm)" +
  "\n2 - centímetro (cm)" +
  "\n3 - decímetro (dm)" +
  "\n4 - decâmetro (dam)" +
  "\n5 - hectômetro (hm)" +
  "\n6 - quilômetro (km)");

switch (unidade) {
  case "1": 
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
    break
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
    break
  case "3": 
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
    break 
  case "4": 
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
    break 
  case "5": 
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
    break 
  case "6": 
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km" );
    break 
  default:
    alert ("Opção Inválida")
}