/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925
Juliana Castro nasceu em 1995
*/

const nome = 'Juliana'
const sobrenome = 'Castro'
const idade = 27
const peso = 81
const alturaEmM = 1.68 // Metro
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento 

indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2022 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)

