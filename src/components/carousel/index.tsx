import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as CarouselCustom } from "./carousel";

const StyledCarousel = styled(CarouselCustom)``;

export interface CarouselProps {
  autoplay?: boolean;
  dotPosition?: "top" | "bottom" | "left" | "right";
  dots?: boolean | { className?: string };
  easing?: string;
  effect?: "scrollx" | "fade";
  children?: ReactNode;
  afterChange?: (current: any) => void;
  beforeChange?: (from: any, to: any) => void;
}

function Carousel({
  autoplay = false,
  dotPosition = "bottom",
  dots = true,
  easing = "linear",
  effect = "scrollx",
  children,
  afterChange,
  beforeChange,
}: CarouselProps) {
  const passProps = {
    autoplay,
    dotPosition,
    dots,
    easing,
    effect,
    afterChange,
    beforeChange,
  };
  return <StyledCarousel {...passProps}>{children}</StyledCarousel>;
}

export default Carousel;
