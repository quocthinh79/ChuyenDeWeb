export const arrayToString = (arr: string[]) => {
  return arr.join(", ");
};

export const sumValueArray = (arr: number[]) => {
  return arr?.reduce((pre, current) => pre + current, 0);
};
