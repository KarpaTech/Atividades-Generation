//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas 
// cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. 
// A leitura dos dados deve ser finalizada ao digitar uma idade negativa. Veja o exemplo abaixo

const readline = require ("readline-sync");

//definindo o ponto de partida 
let menores21 = 0;
let maiores50 = 0;

while (true) {
  let idade = readline.questionInt("Digite uma idade: ");
  if (idade < 0) {
    break;
  }
  if (idade < 21) {
    menores21++;
  } else if (idade > 50) {
    maiores50++;
  }
}
console.log(`Total de pessoas maiores de 50: ${maiores50}`);
console.log(`Total de pessoas menores que 21: ${menores21}`);






/*while (true){
    let idade = readline.questionInt ("Digite a idade: ");
    if  ( idade < 0 ){ 
    break;
}
   if (idade < 21){
    IdadeMenor21++;
} else if (idade > 50 ){
    IdadeMaior50++;
    }
} 
console.log(`${IdadeMaior50} foi a idade identificada.`);
console.log(`${IdadeMenor21} foi a idade identificada.`);*/