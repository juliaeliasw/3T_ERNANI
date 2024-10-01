// FUNÇÕES
// DECLARAÇÃO
function dizerOla() {
  console.log('Olá!')
}
function olaPessoa(nome) {
  console.log(`Olá, ${nome} `)
}
const nome = 'Julia'
const idade = 17

function retornaDados() {
  return `Nome: ${nome} - Idade: ${idade}`
}


// INOVAÇÃO
// dzOla()
// olaPessoa('Julia')
// console.log(retornaDados())

// FUNÇÕES PERSONALIZADA VS FUNÇÕES NATIVAS
let salario = 1000;

const intervalo1 =setInterval(function() {
  console.clear();
  salario = salario + 100;
  console.log(`Ganhei ${salario}`);
}, 2000); // tempo ms
/*
setInterval - clearInterval
setTimeout - clearTimeout
*/
setTimeout(function (){
  console.log("--------------");
  clearInterval(intervalo);
  console.info("Intervalo encerrado");  
}, 5000);




  
