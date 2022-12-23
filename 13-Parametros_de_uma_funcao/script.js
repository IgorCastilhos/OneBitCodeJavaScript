 function dobro(x) {
  alert("O dobro de " + x + " é " + (x * 2));
 }

// dobro(5);
// dobro(7);

// dobro();

function dizerOla(nome = "mundo")
{ alert("Olá, " + nome + "!")}

// dizerOla("Igor")
// dizerOla()

function soma(a, b)
{ alert("Resultado da soma é: " + (a + b))}

// soma(7, 6)
// soma(1, 1)

function criarUsuario(nome, email, senha, tipo = "Admin")
{ const usuario =
  { nome, email, senha, tipo} // mesmo que nome: nome
  console.log(usuario);
}

function novoUsuario(nome, tipo = admin, email, senha) {
  { const usuario =
    { nome, email, senha, tipo} // mesmo que nome: nome
    console.log(usuario);
  }
}    

// criarUsuario("Igor", "igor@email.com", "1234")
// novoUsuario("Igor", "igor@email.com", "1234") 

// Inserir valores padrões sempre no final

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}

function objetoComoParametro(usuario) {
  // ...
  usuario.nome
  usuario.email
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosDoUsuario = {
  nome: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: ""
}

objetoComoParametro(dadosDoUsuario)