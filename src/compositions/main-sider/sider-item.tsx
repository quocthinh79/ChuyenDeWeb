import { memo, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckableTag, Flex } from "../../components";
import { EWrapFlex } from "../../core";
import { handleSpecialSymbol } from "../../core/utilities/navigation/search-params";
import useSelectedTag from "../../hooks/use-selected-tag/use-selected-tag";

export interface SiderItemProps {
  label: string;
  children: string[];
}

export function SiderItem({ label, children }: SiderItemProps) {
  const { handleChange, selectedTags } = useSelectedTag(label);

  const element = useMemo(() => {
    return (
      <Flex wrap={EWrapFlex.Wrap} gap={10}>
        {children.map((tag, index) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.includes(handleSpecialSymbol(tag))}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Flex>
    );
  }, [selectedTags]);

  return <>{element}</>;
}

export default memo(SiderItem);
