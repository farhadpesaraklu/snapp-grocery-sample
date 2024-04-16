import { useState } from "react";

import TopToolbar from "../../components/topToolbar/TopToolbar";
import SubCategories from "../../components/subCategories/SubCategories";
import "./Supermarket.css";
import useCategory from "../../hooks/useCategory";
import useInfiniteLoading from "../../utils/hooks/useInfiniteLoading";
import ProductList from "../../components/ProductList/ProductList";

const Supermarket = () => {
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<number | null>(null);
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
      {vendorCategoryData && (
        <SubCategories
          items={vendorCategoryData?.pages?.[0]?.extra_sections?.categories}
          handleClickSubCategory={setSelectedSubCategoryId}
        />
      )}
      <div className="product-list-container" id="list-container">
        {vendorCategoryData && <ProductList data={vendorCategoryData.pages} />}
      </div>
    </div>
  );
};

export default Supermarket;
