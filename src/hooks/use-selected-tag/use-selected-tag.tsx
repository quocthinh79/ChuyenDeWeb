import { useState } from "react";

export interface useSelectedTagProps {
  selectedTags?: string[];
  handleChange?: (tag: string, checked: boolean) => void;
}

function useSelectedTag() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };
  return {
    selectedTags,
    handleChange,
  };
}

export default useSelectedTag;
