import { Card, Col, Row, Space, Text, Title } from "@components";
import { LaptopCardItem } from "@compositions";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import { IProduct, apiSearchLaptopWithName } from "@core";
import { laptopItemList } from "@dummy-data";
import { useQuery } from "@tanstack/react-query";
import { Empty } from "antd";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export interface SearchPageProps {}

export function SearchPage(props: SearchPageProps) {
  const [searchParams] = useSearchParams();
  const keyWord = searchParams.get("keyWord");

  const { data: laptopItemList, refetch } = useQuery<IProduct[]>({
    queryKey: ["searchLaptop"],
    queryFn: () => apiSearchLaptopWithName({ productName: keyWord || "" }),
  });

  useEffect(() => {
    refetch();
  }, [keyWord]);

  return (
    <Space>
      <Card bodyStyle={{ width: "100%" }}>
        <Title level={2}>Kết quả tìm kiếm cho "{keyWord}"</Title>
        <Text>Tìm thấy {laptopItemList?.length} sản phẩm</Text>
      </Card>
      <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
        {laptopItemList?.length || 0 > 0 ? (
          laptopItemList?.map(
            (
              {
                price: laptopCurrency,
                productName: laptopName,
                linkAvatar: srcImage,
              },
              index
            ) => (
              <Col key={`${laptopName}${index}`} span={6}>
                <LaptopCardItem
                  key={index}
                  id={index}
                  price={laptopCurrency}
                  productName={laptopName}
                  linkAvatar={srcImage}
                />
              </Col>
            )
          )
        ) : (
          <Empty style={{ width: "100%", backgroundColor: "white" }} />
        )}
      </Row>
    </Space>
  );
}

export default SearchPage;
