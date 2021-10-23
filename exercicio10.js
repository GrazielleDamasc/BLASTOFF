// 10 - Faça um algoritmo que receba um número e retorne o Fatorial desse número n! = n . (n – 1).

let numero = 5
let fatorial = 1
  for (let i = numero; i >= 1; i--) {
   fatorial = fatorial * i;
  }
  console.log(fatorial);
