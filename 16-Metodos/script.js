let pessoa = {
  nome: 'igor',
  idade: 22,
  dizerOla(){
    console.log("Olá mundo! Meu nome é " + this.nome);
  }
}
console.log(pessoa);
pessoa.dizerOla();