import { getImaginaryPart, getRealPart, hasInvalidLength, bubbleSort, removeRecurrences, has } from "./utils";

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
  if (hasInvalidLength(a, b, c)) {
    throw new Error("Os lados devem ser maiores que zero.");
  }

  if (a === b && a === c) {
    return "Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Isósceles";
  }

  return "Escaleno";
};

/*
 * Faça um algoritmo que recebe um array de numeros, e retorne um novo array, com os objetos ordenados.
 */
const getSortedArray = (numbers: number[]): number[] => {
  const copy = [...numbers];

  bubbleSort(copy, copy.length);

  return copy;
};

/*
 * Implementar a união dos grupos a e b.
 */
const getUnion = (firstArray: number[], secondArray: number[]): number[] => {
  const result = [...firstArray, ...secondArray];

  return removeRecurrences(result);
};

/*
 * Implementar a interseção dos gupos a e b.
 */
const getIntersection = (firstArray: number[], secondArray: number[]): number[] => {
  const result: number[] = [];

  for (let element of firstArray) {
    if (has(secondArray, element)) {
      result.push(element);
    }
  }

  return removeRecurrences(result);
};

/*
 * Implementar a diferença dos gupos a e b.
 * OBS.: Não ficou claro para mim se a questão pede "a - b" ou "b - a",
 * então, eu implementei a diferença simétrica entre os conjuntos.
 */
const getDifference = (firstArray: number[], secondArray: number[]): number[] => {
  const union = getUnion(firstArray, secondArray);
  const intersection = getIntersection(firstArray, secondArray);
  const result: number[] = [];

  for (let element of union) {
    if (!has(intersection, element)) {
      result.push(element);
    }
  }

  return result;
};
