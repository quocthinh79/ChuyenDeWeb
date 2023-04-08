import { Card, Col, Row, Space, Text, Title } from "@components";
import { LaptopCardItem } from "@compositions";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import { laptopItemList } from "@dummy-data";
import { useSearchParams } from "react-router-dom";

export interface SearchPageProps {}

export function SearchPage(props: SearchPageProps) {
  const [searchParams] = useSearchParams();
  const keyWord = searchParams.get("keyWord");

  return (
    <Space>
      <Card>
        <Title level={2}>Kết quả tìm kiếm cho "{keyWord}"</Title>
        <Text>Tìm thấy 4 sản phẩm</Text>
      </Card>
      <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
        {laptopItemList?.map(
          ({ laptopCurrency, laptopName, srcImage }, index) => (
            <Col key={`${laptopName}${index}`} span={6}>
              <LaptopCardItem
                key={index}
                idProduct={index}
                laptopCurrency={laptopCurrency}
                laptopName={laptopName}
                srcImage={srcImage}
              />
            </Col>
          )
        )}
      </Row>
    </Space>
  );
}

export default SearchPage;
