import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Description,
  DescriptionItem,
  Divider,
  Flex,
  Row,
  Space,
  Text,
  Title,
} from "@components";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import {
  EButtonTypes,
  EContentTypeTypography,
  EDirectionFlex,
  EDirectionType,
  IAddToCart,
  ILaptopInformation,
  IProduct,
  apiAddToCart,
  apiGetImagesLaptop,
  apiGetLaptopByID,
  formatCurrency,
  routerPathFull,
} from "@core";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import LeftRightLayout from "../left-right-layout";
import SliderOverviewProduct from "../slider-overview-product/slider-overview-product";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useStorageToken } from "@store";

const StyledCol = styled(Col)`
  height: fit-content;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function DetailProductItem({}: // battery,
// color,
// cpu,
// disk,
// gpu,
// mainConnect,
// name,
// price,
// ram,
// screen,
// weight,
// image,
ILaptopInformation) {
  const { colorPrice } = useTheme();
  // const url = new URL(window.location.href);
  // const idProduct = url.pathname.split("/")[url.pathname.split("/").length - 1];
  let { idProduct } = useParams();

  const { data: informationProduct } = useQuery<IProduct>({
    refetchOnWindowFocus: false,
    queryKey: ["detailProduct"],
    queryFn: () => apiGetLaptopByID(Number(idProduct)),
  });

  const {
    battery,
    brand,
    chipCpu,
    color,
    cpu,
    display,
    graphics,
    id,
    laptopState,
    linkAvatar,
    price,
    productName,
    quantity,
    ram,
    storage,
    type,
    weight,
  } = informationProduct || {};

  const { data: listImages } = useQuery<string[]>({
    queryKey: ["listImage"],
    queryFn: () => apiGetImagesLaptop(Number(idProduct)),
  });

  const navigation = useNavigate();

  const { mutate: addProductToCart } = useMutation({
    mutationKey: ["addProductToCart"],
    mutationFn: apiAddToCart,
    onSuccess(data, variables, context) {},
    onError(error, variables, context) {
      console.log(error);
    },
  });

  const { token } = useStorageToken();

  const handleAddToCart = async () => {
    await addProductToCart({
      laptopId: Number(idProduct),
      quantity: Number(1),
      token: String(token),
    });
  };

  return (
    <LeftRightLayout
      leftChildren={
        <Flex direction={EDirectionFlex.Column} gap={SPACE_BETWEEN_ITEMS}>
          <SliderOverviewProduct image={listImages || []} />
          <Card>
            <Title level={4}>Cấu hình chi tiết</Title>
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Vi xử lý (CPU)">{cpu}</DescriptionItem>
              <DescriptionItem label="RAM">{ram}</DescriptionItem>
            </Description>
            <Divider />
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Màn hình">{display}</DescriptionItem>
              <DescriptionItem label="Card đồ họa (GPU)">
                {graphics}
              </DescriptionItem>
            </Description>
            <Divider />
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Lưu trữ">{storage}</DescriptionItem>
              <DescriptionItem label="Pin">{battery}</DescriptionItem>
            </Description>
            <Divider />
            <Description
              column={2}
              size="small"
              layout={EDirectionType.Vertical}
            >
              <DescriptionItem label="Loại Laptop">{type}</DescriptionItem>
              <DescriptionItem label="Trọng lượng">{weight}</DescriptionItem>
            </Description>
            <Divider />
          </Card>
        </Flex>
      }
      rightChildren={
        <Card>
          <Space>
            <Title level={3}>{productName}</Title>
            <Text type={EContentTypeTypography.Secondary}>
              SKU: XPS13931502NO (ID: {idProduct})
            </Text>
            <Text textColor={colorPrice} strong>
              {formatCurrency(price || 0)}
            </Text>
            <Description column={1} title="Cấu hình">
              <DescriptionItem label="CPU">{cpu}</DescriptionItem>
              <DescriptionItem label="GPU">{graphics}</DescriptionItem>
              <DescriptionItem label="RAM">{ram}</DescriptionItem>
              <DescriptionItem label="Lưu trữ">{storage}</DescriptionItem>
              <DescriptionItem label="Màu">{color}</DescriptionItem>
            </Description>
          </Space>
          <Divider />
          <Space widthFull>
            <Text textColor={colorPrice} strong>
              {formatCurrency(price || 0)}
            </Text>
            <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
              <Col span={20}>
                <Button
                  block
                  type={EButtonTypes.Primary}
                  onClick={() => {
                    handleAddToCart;
                    navigation(routerPathFull.cart.root);
                  }}
                >
                  Mua ngay
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  icon={<ShoppingCartOutlined />}
                  block
                  type={EButtonTypes.Primary}
                  onClick={handleAddToCart}
                ></Button>
              </Col>
            </Row>
          </Space>
        </Card>
      }
    />
  );
}

export default DetailProductItem;
