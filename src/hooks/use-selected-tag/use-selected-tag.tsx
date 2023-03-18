import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { handleSpecialSymbol } from "../../core/utilities/navigation/search-params";

export interface useSelectedTagProps {
  selectedTags: string[];
  handleChange: (tag: string, checked: boolean) => void;
}

function useSelectedTag(label: string): useSelectedTagProps {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, handleSpecialSymbol(tag)]
      : selectedTags.filter((t) => t !== handleSpecialSymbol(tag));
    setSelectedTags(nextSelectedTags);
  };
  return {
    selectedTags,
    handleChange,
  };
}

export default useSelectedTag;
