// 8 - Faça um algoritmo que receba um número e retorne se o número é primo ou não.

let number = 97

if (number > 1 && number != 2 && number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0 || number % 9 === 0) {
  console.log("NÃO é um número primo");
} else {
  console.log("SIM, É um número primo");
}