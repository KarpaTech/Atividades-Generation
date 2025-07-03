const readline = require ("readline-sync");

console.log("Numeros sem ser 0\nsome os que forem positivos");

let numero = 0;
let soma = 0;
let continuar = true;

do{

    numero = readline.questionInt ("Digite um número inteiro: ");
    if (numero > 0){
        soma += numero;
    } if (numero == 0){
        continuar = false
    }

}while ( continuar == true);

console.log(`${soma}é a soma dos números positivos.`);