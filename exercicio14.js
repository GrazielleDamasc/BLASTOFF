// 14 - Faça um algoritmo que recebe uma palavra e retorne se a palavra é palíndromo. (Palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa. Ex: osso, Ana e etc).

const palindromo = palavra => {
  const inverter = palavra.split('').reverse().join('')
  return palavra === inverter
}
console.log(palindromo('reviver')) // Digite aqui sua palavra
