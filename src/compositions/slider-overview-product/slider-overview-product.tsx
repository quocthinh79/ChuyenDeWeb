import { memo } from "react";
import { Card, Image } from "../../components";
import Carousel from "../../components/carousel";

function SliderOverviewProduct() {
  return (
    <Card>
      <Carousel arrows lazyLoad="progressive" autoplay draggable>
        <Image src="https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/dell-latitude-7320-detachable-thinkpro-2.png?w=700&h=700" />
        <Image src="https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/dell-latitude-7320-detachable-thinkpro-2.png?w=700&h=700" />
        <Image src="https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/dell-latitude-7320-detachable-thinkpro-2.png?w=700&h=700" />
        <Image src="https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/dell-latitude-7320-detachable-thinkpro-2.png?w=700&h=700" />
        <Image src="https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/dell-latitude-7320-detachable-thinkpro-2.png?w=700&h=700" />
      </Carousel>
    </Card>
  );
}

export default memo(SliderOverviewProduct);
