import { useInfiniteQuery } from "react-query";

import { getVendorCategoryProductList } from "../services/vendorProductCategoryService/vendorProductCategoryServices";

const useCategory = ({
  category_id,
  vendor_code,
  subcat_id,
}: {
  category_id: string;
  vendor_code: string;
  subcat_id?: number;
}) => {
  const {
    data: vendorCategoryData,
    isLoading: vendorCategoryDataLoading,
    isFetching: vendorCategoryDataIsFetching,
    isFetchingNextPage: vendorCategoryDataIsFetchingNextPage,
    fetchNextPage: vendorCategoryDataFetchNextPage,
    refetch: refetchVendorCategoryData,
  } = useInfiniteQuery({
    queryKey: ["getVendorCategoryData", subcat_id],
    queryFn: ({ pageParam = 0 }) => {
      return getVendorCategoryProductList({
        category_id,
        vendor_code,
        subcat_id,
        page: pageParam,
        page_size: 12,
        size: 12,
      }).then((res) => res.data);
    },
    getNextPageParam: (lastPage, allPages) => {
      const allLength = allPages.length - 1;
      return lastPage.finalResult.length > 0 ? allLength + 1 : undefined;
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
