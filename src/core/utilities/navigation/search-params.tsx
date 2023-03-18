import { REGEX_ALL_SYMBOL } from "../../regex";

export const handleSpecialSymbol = (
  input: string,
  symbolToReplace: string = "_"
) => {
  return input.replace(REGEX_ALL_SYMBOL, symbolToReplace);
};
