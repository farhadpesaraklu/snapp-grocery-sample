import { VendorCateogryProductListResponse } from "../../services/vendorProductCategoryService/type";
import ProductCard from "../productCard/ProductCard";
import "./ProductList.css";

interface ProductListProps {
  data: VendorCateogryProductListResponse[];
}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className="list-container">
      {data.map((page) =>
        page?.finalResult?.map((item) => <ProductCard key={item.id} item={item} />),
      )}
    </div>
  );
};
export default ProductList;
