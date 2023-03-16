import { memo } from "react";
import { CheckableTag, Flex } from "../../components";
import { EWrapFlex } from "../../core";
import useSelectedTag from "../../hooks/use-selected-tag/use-selected-tag";

export interface SiderItemProps {
  children: string[];
}

export function SiderItem({ children }: SiderItemProps) {
  const { handleChange, selectedTags } = useSelectedTag();
  return (
    <Flex wrap={EWrapFlex.Wrap} gap={10}>
      {children.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </Flex>
  );
}

export default memo(SiderItem);
