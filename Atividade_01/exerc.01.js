// Importando readline-sync
const readline = require('readline-sync');
// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior
// menor ou igual a C.
10
//recebendo valores
let num1 = (readline.questionInt("Digite o primeiro numero: "));
let num2 = (readline.questionInt("Digite o segundo numero: "));
let num3 = (readline.questionInt("Digite o terceiro numero: "));
let soma = (num1 + num2);

//tomada de decisao

if (soma > num3){
    console.log(`${num1} + ${num2} = ${soma} > ${num3}`);
    console.log("Soma de A + B é maior que o C");
}
else if(soma = num3){
    console.log(`${num1} + ${num2} = ${soma} = ${num3}`);
    console.log("Soma de A + B é igual a C");
}
else if (soma < num3){
    console.log(`${num1} + ${num2} = ${soma} < ${num3}`);
    console.log("Soma de A + B é menor que C");
} else {
    console.log("Houve um erro!");
}