// arrays sao indexados
// possuem métodos
// podem ser iterados
const nome = "Julia"
const time = ['Marcos', 'Raimundo', 'Jose', 'Luis', 'Juliana']
// (PARENTESES), [COLCHETES], {CHAVES}
time.push("Chave") // SEMPRE NO FINAL DA LISTA
time.shift() // Remove alguem no inicio
console.log(time)
console.log(time[2]) // José
console.log(time[20]) // undefined
time[20] = "Pelé"
console.log(time[20]) // Pelé
// ITERAR - LOOP ATE O ESGOTAMENTO (FOR, FOREACH, WHILE, FOR IN, FOR OF)
for(var i =0; i <= 4; i++ ){
  console.log(time[i])
}