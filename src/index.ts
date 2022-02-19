/*
 * Faça um algoritmo que calcule a fórmula de equação quadrática ("fórmula de bháskara").
 */

const getRealPart = (a: number, b: number) => (-1 * b) / (2 * a);
const getImaginaryPart = (a: number, delta: number) => Math.sqrt(-1 * delta) / (2 * a);

const calcSolution = (a: number = 1, b: number = 0, c: number = 0): Solution => {
  const delta = Math.pow(b, 2) - 4 * a * c;
  let rootOne;
  let rootTwo;

  if (a === 0) {
    throw new Error("O coeficiente 'a' não pode ser igual a zero.");
  }

  if (delta < 0) {
    rootOne = `${getRealPart(a, b)} + ${getImaginaryPart(a, delta)}i`;
    rootTwo = `${getRealPart(a, b)} - ${getImaginaryPart(a, delta)}i`;
  } else {
    rootOne = (-1 * b + Math.sqrt(delta)) / (2 * a);
    rootTwo = delta ? (-1 * b - Math.sqrt(delta)) / (2 * a) : null;
  }

  return { rootOne, rootTwo };
};
