import { Pagination } from "../../components";
import ProductItemLayout from "../../compositions/product-item-layout/product-item-layout";
import { laptopItemList } from "../../dummy-data";
import { usePagination } from "../../hooks";

function HomePage() {
  const { currentPage, handleChange } = usePagination();

  return (
    <>
      <ProductItemLayout children={laptopItemList} />
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
    </>
  );
}

export default HomePage;
