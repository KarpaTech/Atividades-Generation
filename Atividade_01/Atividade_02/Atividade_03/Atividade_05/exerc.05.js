// Com base na tabela abaixo, escreva um algoritmo que leia o código de um item 
// (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). 
// A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado

//importando o readline
c 
//exibir o cardapio

console.log(`\t Cardápio \n01.Hot Dog__ R$10.00\n02.X-Bacon__ R$18.00\n03.X-Salada__
R$15.00\n04.Bauru__ R$12.00\n05.Pepsi__R$8.00\n06.Suco de laranja__R$13.00`);

//declarando as variaveis
let opcaoCardapio = readline.questionInt ("Escolha tua opção [1 à 6]: ");
let quantidade = readline.questionInt("Diga o quanto deseja: ");
let preco;
let total;

switch (opcaoCardapio){
case 1:
    preco = 10.00;
    total = quantidade * preco;
    console.log(`\nProduto: Hot Dog\nquantidade: ${quantidade}\n total: R$${total.toFixed(2)}`);
    break;
case 2:
    preco = 18.00;
    total = quantidade * preco;
    console.log(`\nProduto: X-Bacon\nquantidade: ${quantidade}\n total: R$${total.toFixed(2)}`);
    break;
case 3:
    preco = 15.00;
    total = quantidade * preco;
    console.log(`\nProduto: X-Salada\nquantidade: ${quantidade}\n total: R$${total.toFixed(2)}`);
    break;
case 4:
    preco = 12.00;
    total = quantidade * preco;
    console.log(`\nProduto: Bauru\nquantidade: ${quantidade}\n total: R$${total.toFixed(2)}`);
    break;
case 5:
    preco = 8.00;
    total = quantidade * preco;
    console.log(`\nProduto: Pepsi\nquantidade: ${quantidade}\n total: R$${total.toFixed(2)}`);
    break;
case 6:
    preco = 13.00;
    total = quantidade * preco;
    console.log(`\nProduto: Suco de laranja \nquantidade: ${quantidade}\n total: R$${total.toFixed(2)}`);
    break;
}
