// 2- Dada a distância A e o combustível gasto B, faça um algoritmo para calcular o consumo médio

const comb = function (km, ltKm) {
  let consumo = km / ltKm
  return consumo
}
let km = 400
let ltKm = 34

console.log(`Seu consumo médio é ${comb(km, ltKm).toFixed(2)} km/ litro`);
