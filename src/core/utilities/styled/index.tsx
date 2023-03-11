import { css as cssEmotionCss } from "@emotion/css";
import styled from "@emotion/styled";

export const templateStringToClassName = () => {
  return cssEmotionCss;
};

export const styledComponent = (component: any) => {
  return styled(component);
};
