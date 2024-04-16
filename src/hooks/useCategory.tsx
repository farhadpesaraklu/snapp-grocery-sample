import { useInfiniteQuery } from "react-query";
import { useDispatch } from "react-redux";

import { getVendorCategoryProductList } from "../services/vendorProductCategoryService/vendorProductCategoryServices";
import { setFiltersAndSortList } from "../store/reducers/filterArrayReducer";
import { setSubCategoriesList } from "../store/reducers/subCategoriesReducer";

const useCategory = ({
  category_id,
  vendor_code,
  subcat_id,
  filters,
}: {
  category_id: string;
  vendor_code: string;
  subcat_id?: number;
  filters?: string[];
}) => {
  const dispatch = useDispatch();

  const {
    data: vendorCategoryData,
    isLoading: vendorCategoryDataLoading,
    isFetching: vendorCategoryDataIsFetching,
    isFetchingNextPage: vendorCategoryDataIsFetchingNextPage,
    fetchNextPage: vendorCategoryDataFetchNextPage,
    refetch: refetchVendorCategoryData,
  } = useInfiniteQuery({
    queryKey: ["getVendorCategoryData", subcat_id, filters?.length],
    queryFn: ({ pageParam = 0 }) => {
      return getVendorCategoryProductList({
        category_id,
        vendor_code,
        subcat_id,
        page: pageParam,
        page_size: 12,
        size: 12,
        filters,
      }).then((res) => res.data);
    },
    getNextPageParam: (lastPage, allPages) => {
      const allLength = allPages.length - 1;
      return lastPage?.finalResult.length > 0 ? allLength + 1 : undefined;
    },
    onSuccess: (res) => {
      if (res?.pages?.[0]?.extra_sections) {
        dispatch(setFiltersAndSortList(res?.pages?.[0]?.extra_sections?.filters));
        dispatch(setSubCategoriesList(res?.pages?.[0]?.extra_sections?.categories));
      }
    },
    staleTime: 30 * 60 * 1000,
  });

  return {
    vendorCategoryData,
    vendorCategoryDataFetchNextPage,
    vendorCategoryDataIsFetching,
    vendorCategoryDataIsFetchingNextPage,
    vendorCategoryDataLoading,
    refetchVendorCategoryData,
  };
};
export default useCategory;
