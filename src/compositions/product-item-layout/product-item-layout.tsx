import { Pagination } from "../../components";
import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import LaptopCardItem, { LaptopCardItemProps } from "../laptop-card-item";
import { SPACE_BETWEEN_ITEMS } from "../../const";
import { usePagination } from "../../hooks";

export interface ProductItemLayoutProps {
  children?: LaptopCardItemProps[];
}

export function ProductItemLayout({ children }: ProductItemLayoutProps) {
  const { currentPage, handleChange } = usePagination();

  return (
    <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
      {children?.map(({ laptopCurrency, laptopName, srcImage }, index) => (
        <Col key={`${laptopName}${index}`} span={8}>
          <LaptopCardItem
            key={index}
            idProduct={index}
            laptopCurrency={laptopCurrency}
            laptopName={laptopName}
            srcImage={srcImage}
          />
        </Col>
      ))}
      <Col span={SPACE_BETWEEN_ITEMS}>
        <Pagination
          // responsive
          hideOnSinglePage
          // simple
          current={currentPage}
          defaultCurrent={1}
          pageSize={9}
          total={100}
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
}

export default ProductItemLayout;
