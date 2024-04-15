import { apiUrlConstants } from "../../constants/apiUrlConstants";
import http from "../../utils/http";
import { VendorCateogryProductListParams } from "./type";

const getVendorCategoryProductList = ({
  category_id,
  vendor_code,
  subcat_id,
  page,
  page_size,
  size,
}: VendorCateogryProductListParams) => {
  return http
    .get(apiUrlConstants.productList, {
      params: {
        vendor_code,
        category_id,
        page,
        page_size,
        size,
        subcat_id,
      },
    })
    .then((res) => res.data);
};

export { getVendorCategoryProductList };
