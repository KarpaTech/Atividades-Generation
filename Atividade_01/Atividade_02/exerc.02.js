//Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par 
// ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:

const readline = require("readline-sync")

console.log("\nDe acordo com o número, veremos se é par ou ímpar.\n");

let num = readline.questionInt("O número é: ");

if (num > 0 ){
    if ( (num % 2) === 0) {
        console.log(`\nO número (${num}) é par, sendo ele positivo.`);
    } else if ( (num % 2) != 0) {
        console.log(`\nO número (${num}) é ímpar, sendo ele positivo.`);
    } else {
        console.log (`\nHouve um erro!`);
    }
} else if (num  < 0 ) {
    if ( (num % 2) === 0) {
        console.log(`\nO número (${num}) é par, sendo ele negativo.`);
    } else if ( (num % 2) != 0) {
        console.log(`\nO número (${num}) é ímpar, sendo ele negativo.`);
    } else 
        console.log (`\nHouve um erro!`);
    }
