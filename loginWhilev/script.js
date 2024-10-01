
// CRIE UM PROGRAMA QUE CHEQUE USUARIO E SENHA 
// CASO O USUARIO E SENHA SEJAM IGUAIS AO CADASTRADO, EXIBA UMA MENSAGEM DE SUCESSO 
// CASO CONTRARIO, PERGUNTE NOVAMENTE (WHILE)
const usuario = "admin"
const senha = "1234"
let u, s = ""
let estaLogado = false

while (!estaLogado) {
  u = prompt("Digite o usuário: ")
  s = prompt("Digite a senha: ")
  if (u == usuario && s == senha) {
    window.alert("Seja bem-vindo " + usuario)
    estaLogado = true
  } else {
    window.alert("Usuário ou senha inválidos. Tente novamente.")
  }
}
