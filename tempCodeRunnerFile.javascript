//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas 
// cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. 
// A leitura dos dados deve ser finalizada ao digitar uma idade negativa. Veja o exemplo abaixo

const leia = require("readline-sync");

let continua = true;
let numero1, numero2, resultado;

while (continua) {
    numero1 = leia.questionInt("Digite primeiro valor: ");

    numero2 = leia.questionInt("Digite segundo valor: ");

    resultado = numero1 + numero2;

    console.log("O resultado da soma é: " + resultado);

    console.log("\n++++++++++++++++MENU++++++++++++++++++");
    continua = leia.keyInYNStrict("\nDeseja continuar? ");
    console.log("++++++++++++++++++++++++++++++++++");
}
