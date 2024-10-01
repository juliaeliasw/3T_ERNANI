/** CRIE UM ARRAY DE OBJETOS => PESSOAS
 * COM OS SEGUINTES ATRIBUTOS: NOME/SOBRENOME
 * CRIE UMA FUNÇAO QUE ITERE SOBRE O ARRAY
 * E RETIRE NOMES E SOBRENOMES
 * CRIE UMA VARIAVEL COM O CONTEUDO:
 *     -> const emailBase = "@escola.pr.gov.br"
 * A PARTIR DESSES DADOS FORME UM @escola com
 * NOME.SOBRE+EMAILBASE
 * EXECUTE A FUNÇÃO...
 */
const pessoas = [
  { nome: "João", sobreNome: "Silva" },
  { nome: "Maria", sobreNome: "Souza"},
];
// CRIAR EMAIL BASE
const emailBase = "@escola.pr.gov.br";

for (pessoa of pessoas) {
 const nome = pessoa.nome;
  const sobrenome = pessoa.sobreNome
  const email = '${nome} ${sobrenome} ${emailBase}'
  console.log(email)
}
// CONVERTAM O DODIGO ACIMA PARA UMA FUNCAO INVOCAVEL
// E EXECUTAVEL

