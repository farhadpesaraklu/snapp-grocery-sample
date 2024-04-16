import { useEffect, useState } from "react";

import TopToolbar from "../../components/topToolbar/TopToolbar";
import SubCategories from "../../components/subCategories/SubCategories";
import "./Supermarket.css";
import useCategory from "../../hooks/useCategory";
import useInfiniteLoading from "../../utils/hooks/useInfiniteLoading";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductList from "../../components/productList/ProductList";

const Supermarket = () => {
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<number | null>(
    Number(sessionStorage.getItem("selectedCategoryId")) ?? null,
  );

  const uniqueFiltersSet = useSelector((state: RootState) => state.filterList.sortValue);
  const selectedFiltersList = useSelector((state: RootState) => state.filterList.filterValuesList);
  const filtersAndSortList = useSelector((state: RootState) => state.filterList.filtersAndSortList);
  const subCategoriesList = useSelector(
    (state: RootState) => state.subCategoriesList.subCategoriesList,
  );

  const {
    vendorCategoryData,
    vendorCategoryDataFetchNextPage,
    vendorCategoryDataIsFetchingNextPage,
    refetchVendorCategoryData,
  } = useCategory({
    vendor_code: "3eze12",
    category_id: "731207",
    subcat_id: selectedSubCategoryId || undefined,
    filters: [...selectedFiltersList, uniqueFiltersSet],
  });

  useEffect(() => {
    refetchVendorCategoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uniqueFiltersSet, selectedFiltersList]);

  useInfiniteLoading({
    scrollingElementSelector: "#list-container",
    toBeWatchedData: vendorCategoryData,
    loaderMethod: vendorCategoryDataFetchNextPage,
    loading: vendorCategoryDataIsFetchingNextPage,
  });

  return (
    <div className="supermarket-container">
      <TopToolbar data={filtersAndSortList} />
      {vendorCategoryData && (
        <SubCategories
          items={subCategoriesList}
          handleClickSubCategory={setSelectedSubCategoryId}
        />
      )}
      <div className="product-list-container" id="list-container">
        {vendorCategoryData ? (
          <ProductList data={vendorCategoryData.pages} />
        ) : (
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#ff7800"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperClass="TailSpin-container"
          />
        )}
      </div>
    </div>
  );
};

export default Supermarket;
