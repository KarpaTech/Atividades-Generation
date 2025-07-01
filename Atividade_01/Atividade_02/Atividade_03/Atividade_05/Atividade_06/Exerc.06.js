//Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador
//  (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador,
//  o Cargo e o novo Salário reajustado.

const readline = require("readline-sync")

//entrada de dados

let nome = readline.question ("Diga o teu nome: ");

//entrada e armazenamento de dados

console.log ("Diga o cargo: ");
console.log ("1 Gerente | 2 Vendedor | 3 Supervisor | 4 Motorista | 5 Estoquista | 6 Técnico de TI");

let cargo = readline.questionInt ("Diga o código: ");
let salario= readline.questionInt ("Diga o teu salário: ");

switch(cargo){
case 1:
    let novoSal1 = salario + salario * 0.1;
    console.log(`\n ${nome}\n Gerente\n Novo salário: \n${novoSal1.toFixed(2)}`);
    break;
case 2:
    let novoSal2 = salario + salario * 0.07;
    console.log(`\n ${nome}\n Vendedor\n Novo salário: \n${novoSal2.toFixed(2)}`);
    break;
case 3:
    let novoSal3 = salario + salario * 0.09;
    console.log(`\n ${nome}\n Supervisor\n Novo salário: \n${novoSal3.phtoFixed(2)}`);
    break;
case 4:
    let novoSal4 = salario + salario * 0.06;
    console.log(`\n ${nome}\n Motorista\n Novo salário: \n${novoSal4.toFixed(2)}`);
    break;
case 5:
    let novoSal5 = salario + salario * 0.05;
    console.log(`\n ${nome}\n Estoquista\n Novo salário: \n${novoSal5.toFixed(2)}`);
    break;
case 6:
    let novoSal6 = salario + salario * 0.08;
    console.log(`\n ${nome}\n Técnico de TI\n Novo salário: \n${novoSal6.toFixed(2)}`);
    break;
}