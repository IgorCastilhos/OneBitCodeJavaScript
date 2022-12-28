// Array para armazenar, listar e fazer todas as outras operações com as vagas
const vagas = [];
// Índice, nome da vaga (nº de candidatos)
function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    // Pega o Array Vagas(l1), usa o método reduce(l10) com os parâmetros da função sendo o primeiro textoFinal, que é o valor que vai se acumulando, a vaga atual e o índice dela
    textoFinal += indice + ". "; // Dentro de textoFinal, concatena o índice da vaga, para ficar assim: 1. , 2. , 3.
    textoFinal += vaga.nome; // A vaga salva no Array vagas[] vai ser um objeto, afinal ela precisa de vários valores como nome, descrição, data limite
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"; // Para salvar vários candidatos em um lugar, usa-se um Array, então dentro do Objeto vaga(parâmetro da função) terá um Array candidatos e sabendo que haverá um Array, utiliza a propriedade length para acessar o seu tamanho
    return textoFinal;
  }, ""); // Segundo parâmetro do reduce vai ser uma String vazia, que é o valor inicial da variável textoFinal
  alert(vagasEmTexto); // alert para mostrar a vaga em formato de texto
}

function criarNovaVaga() {
  const nome = prompt("Informe um nome para a vaga: "); //  Nome pra vaga
  const descricao = prompt("Informe uma descrição para a vaga: "); // Descrição pra vaga
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa) para a vaga: "
  ); // Data Limite pra vaga

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  ); // Confirmação pra inserir a vaga no array vagas

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }; //nome: nome, descricao: descricao, dataLimite: dataLimite; propriedade candidatos = Array vazio [], pra poder chamá-lo com a propriedade length em listar vagas(l9)
    vagas.push(novaVaga); // Adiciona a novaVaga no final do Array
    alert("Vaga criada!");
  }
}

function exibirVaga() {
  /*
  * 1. Pra exibir uma vaga, precisa-se saber qual o índice. O user deve informar o índice dessa vaga.
  * 2. Vaga vai ser = vagas[] na posição [indice]. Assim da pra referenciar as propriedades de uma vaga
  * 3. Precisa exibir as infos do Array de Candidatos que fica dentro do Obj vagas usando o método reduce do array candidatos, passa-se uma função callback e os parâmetros textoFinal e candidato
  * 4. Pra finalizar, um return passando direto o valor de textoFinal, concatenando com o valor de candidato.
  IMPORTANTE! Indicar que o textoFinal começa com uma string vazia 
  */
  const indice = prompt("Informe o índice da vaga que deseja exibir: ");

  if (indice >= vagas.length || indice < 0) {
    alert("Índice inválido!");
    return;
  }

  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  ""); // <-- textoFinal começa com uma String vazia

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  /**
   * 1. const candidato - Abre um prompt para inserir o nome do candidato (l81)
   * 2. const indice - Abre um prompt para inserir o índice da vaga (l82)
   * 3. const vaga - Variável pra pegar a vaga que o user quer se inscrever, através do índice (l85)
   * 4. const confirmacao - Abre caixa de confirmação, retorna um booleano (l86)
   * 5. if (confirmacao) for true, cadastra o candidato incluindo ele no Array candidatos[], passando o nome dele como parâmetro(candidato) (l100)
   */
  const candidato = prompt("Informe o nome do(a) candidato(a): ");
  const indice = prompt(
    "Informe o indice da vaga para a qual o(a) candidato(a) deseja se inscrever: "
  );
  const vaga = vagas[indice];
  const confirmacao = confirm(
    "Deseja inscrever o candidato(a) " +
      candidato +
      " na vaga" +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );
  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada.");
  }
}

function excluirVaga() {
  /**
   * 1. const indice - Para excluir uma vaga, precisamos do indice dela (l111)
   * 2. const vaga - Variável pra pegar a vaga que o user quer excluir dentro do Array (l112)
   * 3. const confirmacao - Abre uma caixa de confirmação que retorna um booleano (l113)
   * 4. if - Se o valor for true, o método de Array Splice() exlui elementos específicos, passando o índice dessa vaga e o número de vagas que eu quero remover
   */
  const indice = prompt("Informe o índice da vaga que deseja excluir: ");
  const vaga = vagas[indice];
  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );
  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída.");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Bem-Vindo ao Site de Vagas de Emprego, por favor digite uma opção: " +
      "\n\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um candidato em uma vaga" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );
  return opcao;
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        criarNovaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção Inválida!");
    }
  } while (opcao !== "6");
}

executar();
