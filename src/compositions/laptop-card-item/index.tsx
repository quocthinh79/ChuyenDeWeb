import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import DescriptionItem from "../../components/description-item";
import Description from "../../components/descriptions";
import Image from "../../components/image";
import { Title } from "../../components/typography";
import { formatCurrency } from "../../core";

export interface LaptopCardItemProps {
  srcImage?: string;
  laptopName?: string;
  laptopCurrency?: number;
  idProduct?: any;
}

export function LaptopCardItem({
  // TODO: Change default props
  idProduct = 2,
  laptopCurrency = 100000000,
  laptopName = "Lenovo Legion 5 Pro 2022",
  srcImage = "https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/2375_lenovo_legion_5_pro_16iah7h_ct1_1600.png?w=500&h=500",
}: LaptopCardItemProps) {
  const { colorPrice } = useTheme();
  return (
    <Link to={`detail/${idProduct}`}>
      <Card hoverable>
        <Image placeholder={laptopName} preview={false} src={srcImage} />
        <Title level={4}>{laptopName}</Title>
        <Description>
          <DescriptionItem
            contentStyle={{ color: colorPrice, fontWeight: 700 }}
            label="Giá"
          >
            {formatCurrency(laptopCurrency, "VND")}
          </DescriptionItem>
        </Description>
      </Card>
    </Link>
  );
}

export default LaptopCardItem;
