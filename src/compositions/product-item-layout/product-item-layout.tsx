import { Pagination } from "../../components";
import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import LaptopCardItem, {
  LaptopCardItemProps,
} from "../../components/laptop-card-item";
import { usePagination } from "../../hooks";

export interface ProductItemLayoutProps {
  children?: LaptopCardItemProps[];
}

export function ProductItemLayout({ children }: ProductItemLayoutProps) {
  const { currentPage, handleChange } = usePagination();

  return (
    <Row gutter={[16, 16]}>
      {children?.map(({ laptopCurrency, laptopName, srcImage }, index) => (
        <Col key={`${laptopName}${index}`} span={6}>
          <LaptopCardItem
            key={index}
            laptopCurrency={laptopCurrency}
            laptopName={laptopName}
            srcImage={srcImage}
          />
        </Col>
      ))}
      <Pagination
        responsive
        hideOnSinglePage
        // simple
        current={currentPage}
        defaultCurrent={1}
        pageSize={10}
        total={100}
        onChange={handleChange}
      />
    </Row>
  );
}

export default ProductItemLayout;
