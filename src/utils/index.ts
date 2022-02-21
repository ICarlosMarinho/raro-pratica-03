export const getRealPart = (a: number, b: number) => (-1 * b) / (2 * a);

export const getImaginaryPart = (a: number, delta: number) => Math.sqrt(-1 * delta) / (2 * a);

export const hasInvalidLength = (...lenghts: number[]): boolean => {
  for (let length of [...lenghts]) {
    if (length <= 0) {
      return true;
    }
  }

  return false;
};

export const bubbleSort = (numbers: number[], length: number): void => {
  if (length < 2) return;

  const lastIndex = length - 1;

  for (let i = 0; i < lastIndex; i++) {
    if (numbers[i] > numbers[i + 1]) {
      [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
    }
  }

  bubbleSort(numbers, lastIndex);
};

export const has = (array: number[], value: number): boolean => {
  for (let element of array) {
    if (element === value) {
      return true;
    }
  }

  return false;
};

export const removeRecurrences = (numbers: number[]): number[] => {
  const result: number[] = [];

  for (let number of numbers) {
    if (!has(result, number)) {
      result.push(number);
    }
  }

  return result;
};
