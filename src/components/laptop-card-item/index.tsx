import { formatCurrency } from "../../core";
import Card from "../card";
import ContainerFixed from "../container-fixed";
import DescriptionItem from "../description-item";
import Description from "../descriptions";
import Image from "../image";
import { Title } from "../typography";

export interface LaptopCardItemProps {
  srcImage?: string;
  laptopName?: string;
  laptopCurrency?: number;
}

export function LaptopCardItem({
  // TODO: Change default props
  laptopCurrency = 100000000,
  laptopName = "Lenovo Legion 5 Pro 2022",
  srcImage = "https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/2375_lenovo_legion_5_pro_16iah7h_ct1_1600.png?w=500&h=500",
}: LaptopCardItemProps) {
  return (
    // TODO: Refactor container
    //     <ContainerFixed>
    <Card hoverable>
      <Image placeholder={laptopName} preview={false} src={srcImage} />
      <Title level={4}>{laptopName}</Title>
      <Description>
        <DescriptionItem
          contentStyle={{ color: "#fe3666", fontWeight: 700 }}
          label="Giá"
        >
          {formatCurrency(laptopCurrency, "VND")}
        </DescriptionItem>
      </Description>
    </Card>
    //     </ContainerFixed>
  );
}

export default LaptopCardItem;
