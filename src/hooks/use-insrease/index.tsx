import { useRef, useState } from "react";

export interface useIncreaseProps {
  value: number;
  inputRef: React.Ref<HTMLInputElement>;
  increase: () => void;
  decrease: () => void;
}

export const useIncrease = (): useIncreaseProps => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(1);

  const increase = () => {
    setValue(Number(inputRef.current?.value) + 1);
  };

  const decrease = () => {
    if (Number(inputRef.current?.value) > 1)
      setValue(Number(inputRef.current?.value) - 1);
  };
  return {
    value,
    inputRef,
    increase,
    decrease,
  };
};
