//Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. 
// Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
//No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. Veja os exemplos abaixo:

const readline = require ("readline-sync");
let num1 = readline.questionInt ("Primeiro valor do intervalo: ");
let num2 = readline.questionInt ("Ultimo valor do intervalo: ");

if(num1 < num2){
    

    // para, o contador 'i' igual ao num1, enquanto o contador 'i' for menor que num2, soma 1 e executa de 1 em 1 ate chegar ao num2
    for(let i = num1; i < num2; i++ ){ 

    //se sobra da divisao do contador 'i' por 3 for exatamente igual a 0, e, sobra da divisao do contador por 5 for igual a 0, execute
           if ( (i % 3) === 0 && (i % 5) === 0  ) {
        console.log(`${i}, é múltiplo de 3 e 5.`);
    }
}

} else{
    console.log("Intervalo inválido!");
}