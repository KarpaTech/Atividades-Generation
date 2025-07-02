//Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número 
// são ímpares. Veja o exemplo abaixo:

const readline = require ("readline-sync");

//definindo o ponto de partida 
let par = 0;
let impar = 0;

for (let i = 1; i < 11; i++ ){
    let num = readline.questionInt ("Digite o número: ");

if ( (num % 2) ===0 ){ // identificando o numero par
    par ++; // encrementar a variavel par em +1
} else{ // se nao for par, define impar
    impar++; // encrementar a variavel impar em +1
}
} 
console.log(`${par} foi o total de números pares.`);
console.log(`${impar} foi o total de números impares.`);
    // definir o for, dentro, peça um numero, executando o for 10x, e cada numero, avalie se é par ou impar, e add na variavel par ou impar