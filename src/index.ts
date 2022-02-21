import { getImaginaryPart, getRealPart, hasInvalidLenght } from "./utils";

/*
 * Faça um algoritmo que calcule a fórmula de equação quadrática ("fórmula de bháskara").
 */
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

/*
 * Faça um algoritmo que recebe três valores numéricos, `a`, `b` e `c`.
 * A partir dos valores recebidos, você precisa verificar se os valores
 * forma um `triângulo equilátero`, um `triângulo isósceles` ou um triângulo escaleno.
 */
const getTriangleType = (a: number, b: number, c: number): TriangleType => {
  if (hasInvalidLenght(a, b, c)) {
    throw new Error("Os lados devem ser maiores que zero.");
  }

  if (a === b && a === c) {
    return "Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Isósceles";
  }

  return "Escaleno";
};

debugger;
