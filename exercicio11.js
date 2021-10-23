// 11 - Dada duas lista de números A[1,2,3,4] e B[1,2,5,8], faça um algoritmo que retorne a intersecção das listas

const A = [1,2,3,4]
const B = [1,2,5,8]

const intersec = A.filter(i => B.includes(i));
console.log(intersec);

