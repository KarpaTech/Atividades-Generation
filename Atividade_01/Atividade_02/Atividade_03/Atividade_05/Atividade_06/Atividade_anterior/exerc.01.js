const readline = require("readline-sync")

//entrada de dados

let salario = readline.questionFloat ("Diga o teu salário: ");

//entrada e armazenamento de dados
let abono = readline.questionFloat("Diga o abono salarial: ");

const novoSal = salario + abono;

console.log(`${novoSal.toFixed(2)} é o novo salário!`);
