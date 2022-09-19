// Exercício fazer conta de mais, receber dois números do usuário, 
// no final um resultado (Antes converter oara um número) e da um alert

let num1 = prompt('Digite um número: ')
let num2 = prompt('Digite outro número: ')

// Converter os números que estão em String para Number
num1 = Number(num1)
num2 = Number(num2)

//Resultado dos dois números
const resultado = num1 + num2
alert(`O resultado da sua conta foi:  ${resultado}`)



