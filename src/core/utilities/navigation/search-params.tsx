import { useSearchParams } from "react-router-dom";
import { SelectedTagsProps } from "../../../hooks";
import { REGEX_ALL_SYMBOL } from "../../regex";

export const handleSpecialSymbol = (
  input: string,
  symbolToReplace: string = "_"
) => {
  return input.replace(REGEX_ALL_SYMBOL, symbolToReplace);
};
