import { memo, useMemo } from "react";
import { Card, Image } from "../../components";
import Carousel from "../../components/carousel";

export interface SliderOverviewProductProps {
  image: string[];
}

function SliderOverviewProduct({ image }: SliderOverviewProductProps) {
  const memoryList = useMemo(() => image.map((item) => item), [image]);

  return (
    <Card key={Math.random()}>
      <Carousel arrows lazyLoad="progressive" autoplay draggable>
        {memoryList.map((item: any) => (
          <Image preview={false} src={item?.imageLink} />
        ))}
      </Carousel>
    </Card>
  );
}

export default memo(SliderOverviewProduct);
