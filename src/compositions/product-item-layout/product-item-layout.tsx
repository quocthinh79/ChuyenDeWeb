import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import LaptopCardItem, {
  LaptopCardItemProps,
} from "../../components/laptop-card-item";

export interface ProductItemLayoutProps {
  children?: LaptopCardItemProps[];
}

export function ProductItemLayout({ children }: ProductItemLayoutProps) {
  return (
    <Row gutter={[16, 16]}>
      {children?.map(({ laptopCurrency, laptopName, srcImage }, index) => (
        <Col span={6}>
          <LaptopCardItem
            key={index}
            laptopCurrency={laptopCurrency}
            laptopName={laptopName}
            srcImage={srcImage}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ProductItemLayout;
