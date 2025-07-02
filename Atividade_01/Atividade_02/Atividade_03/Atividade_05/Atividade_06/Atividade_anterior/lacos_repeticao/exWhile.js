const readline = require("readline-sync");

//while 
// console.log("aiai")


let querContinuar = readline.question("Quer jogar pagando R$500,00? (s): ").toLowerCase();

// Enquanto o jogador continuar pagando, o jogo roda
while (querContinuar === "s") {
  console.log("🎮 Você está jogando!");

  // Pergunta se quer continuar pagando pra jogar de novo
  querContinuar = readline.question("Quer continuar jogando pagando R$500,00? (s): ").toLowerCase();

  if (querContinuar === "s") {
    console.log("💸 Pagamento feito. Continuando o jogo...");
  }
}

console.log("👋 Você saiu!");

