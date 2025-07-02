const readline = require("readline-sync");

let querContinuar;

do {
    //simula alguem jogando
  console.log("🎮 Você está jogando!");

  // Pergunta se quer continuar 
  querContinuar = readline.question("Quer continuar jogando pagando R$500,00? ( para pagar / qualquer outra tecla para sair ): ").toLowerCase();

  if (querContinuar === "s") {
    console.log("💸 Pagamento feito. Continuando o jogo...");
    querContinuar = "p"; // indica que a pessoa quer continuar
  }

}while (querContinuar === "p");

console.log("👋 Você saiu!");

// = readline.question("Quer jogar pagando R$500,00? (s): ").toLowerCase();