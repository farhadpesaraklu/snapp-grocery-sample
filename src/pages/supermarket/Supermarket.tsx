import { useState } from "react";

import TopToolbar from "../../components/topToolbar/TopToolbar";
import SubCategories from "../../components/subCategories/SubCategories";
import "./Supermarket.css";
import useCategory from "../../hooks/useCategory";
import useInfiniteLoading from "../../utils/hooks/useInfiniteLoading";
import ProductList from "../../components/ProductList/ProductList";
import { TailSpin } from "react-loader-spinner";

const Supermarket = () => {
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<number | null>(Number(sessionStorage.getItem("selectedCategoryId")) ?? null);

  const {
    vendorCategoryData,
    vendorCategoryDataFetchNextPage,
    vendorCategoryDataIsFetchingNextPage,
  } = useCategory({
    vendor_code: "3eze12",
    category_id: "731207",
    subcat_id: selectedSubCategoryId || undefined,
  });

  useInfiniteLoading({
    scrollingElementSelector: "#list-container",
    toBeWatchedData: vendorCategoryData,
    loaderMethod: vendorCategoryDataFetchNextPage,
    loading: vendorCategoryDataIsFetchingNextPage,
  });

  return (
    <div className="supermarket-container">
      <TopToolbar />
      {vendorCategoryData ? (
        <SubCategories
          items={vendorCategoryData?.pages?.[0]?.extra_sections?.categories}
          handleClickSubCategory={setSelectedSubCategoryId}
        />)
        :
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#ff7800"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperClass="TailSpin-container"
        />

      }
      <div className="product-list-container" id="list-container">
        {vendorCategoryData && <ProductList data={vendorCategoryData.pages} />}
      </div>
    </div>
  );
};

export default Supermarket;
