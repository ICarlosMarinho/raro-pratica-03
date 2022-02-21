export const getRealPart = (a: number, b: number) => (-1 * b) / (2 * a);

export const getImaginaryPart = (a: number, delta: number) => Math.sqrt(-1 * delta) / (2 * a);

export const hasInvalidLenght = (...lenghts: number[]): boolean => {
  for (let length of [...lenghts]) {
    if (length <= 0) {
      return true;
    }
  }

  return false;
};
