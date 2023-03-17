import { memo, useMemo } from "react";
import { Card, Image } from "../../components";
import Carousel from "../../components/carousel";

export interface SliderOverviewProductProps {
  image: string[];
}

function SliderOverviewProduct({ image }: SliderOverviewProductProps) {
  const memoryList = useMemo(() => image.map((item) => item), [image]);

  return (
    <Card>
      <Carousel arrows lazyLoad="progressive" autoplay draggable>
        {memoryList.map((item) => (
          <Image src={item} />
        ))}
      </Carousel>
    </Card>
  );
}

export default memo(SliderOverviewProduct);
