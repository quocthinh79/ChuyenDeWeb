import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { cx } from "@emotion/css";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { templateStringToClassName } from "../../core";
import { default as CarouselCustom } from "./carousel";

const StyledCarousel = styled(CarouselCustom)`
  .slick-prev,
  .slick-prev:hover,
  .slick-prev:focus {
    font-size: inherit;
    left: 10px;
    z-index: 1;
  }

  .slick-next,
  .slick-next:hover,
  .slick-next:focus {
    font-size: inherit;
    right: 10px;
    z-index: 2;
  }
`;

export interface CarouselProps {
  autoplay?: boolean;
  dotPosition?: "top" | "bottom" | "left" | "right";
  dots?: boolean | { className?: string };
  easing?: string;
  effect?: "scrollx" | "fade";
  draggable?: boolean;
  autoplaySpeed?: number;
  centerMode?: boolean;
  lazyLoad?: "ondemand" | "progressive";
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  iconPrevArrow?: JSX.Element;
  iconNextArrow?: JSX.Element;
  buttonColor?: string;
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
  draggable,
  autoplaySpeed = 3000,
  centerMode = false,
  lazyLoad = "progressive",
  slidesToShow = 1,
  slidesToScroll = 1,
  speed = 500,
  iconPrevArrow = <LeftOutlined />,
  iconNextArrow = <RightOutlined />,
  buttonColor = "black",
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
    draggable,
    autoplaySpeed,
    centerMode,
    lazyLoad,
    slidesToScroll,
    slidesToShow,
    speed,
    buttonColor,
    afterChange,
    beforeChange,
  };
  return (
    <StyledCarousel
      className={cx(templateStringToClassName()`
    .slick-prev,
    .slick-prev:hover,
    .slick-prev:focus {
      color: ${buttonColor};
    }
  
    .slick-next,
    .slick-next:hover,
    .slick-next:focus {
      color: ${buttonColor};
    }
    `)}
      arrows
      prevArrow={iconPrevArrow}
      nextArrow={iconNextArrow}
      {...passProps}
    >
      {children}
    </StyledCarousel>
  );
}

export default Carousel;
