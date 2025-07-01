// Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69
//  anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo 
// que leia via teclado o nome do doador (string), a idade (número inteiro) do doador
//  e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação 
// de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar 
// sangue. Veja os exemplos abaixo:

const readline = require("readline-sync")

let nomeDoador = readline.question("Diga teu nome: ");
let idadeDoador = readline.questionInt("Diga tua idade: ");
let doadorAtivo = readline.question("Ja doou sangue alguma vez? 1 - SIM | 2 - NÃO: ");

if(doadorAtivo === 1){
    doadorAtivo = true;
} else{
    doadorAtivo = false;
}

//laço condicional

if (idadeDoador >= 18 && idadeDoador < 69){
    if(idadeDoador<60 ||idadeDoador >60 && doadorAtivo== true){
        console.log (`${nomeDoador} possui permissão para doar!`);

    }else{
        console.log (`${nomeDoador} possui permissão para doar!`);
    }
}else{
    console.log (`${nomeDoador} não possui permissão para doar!`);
}