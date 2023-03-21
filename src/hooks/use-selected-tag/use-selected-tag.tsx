import { useState } from "react";
import { handleSpecialSymbol } from "../../core/utilities/navigation/search-params";

export interface UseSelectedTag {
  selectedTags: { [label: string]: string[] };
  handleChange: (label: string, tag: string, checked: boolean) => void;
}

function useSelectedTag(): UseSelectedTag {
  const selected: { [label: string]: string[] } = {};
  const [selectedTags, setSelectedTags] = useState<{
    [label: string]: string[];
  }>({});

  const handleChange = (label: string, tag: string, checked: boolean) => {
    console.log(checked);
    if (checked) {
      selected[label] = [
        ...(selectedTags[label] || []),
        handleSpecialSymbol(tag),
      ];
    } else {
      selected[label] = [
        ...(selectedTags[label]?.filter(
          (item) => item !== handleSpecialSymbol(tag)
        ) || []),
      ];
    }
    setSelectedTags({ ...selectedTags, ...selected });
  };

  return {
    selectedTags,
    handleChange,
  };
}

export default useSelectedTag;
