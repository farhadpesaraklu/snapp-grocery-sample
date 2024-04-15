import { FC } from "react";
import { FinalResult } from "../../services/vendorProductCategoryService/type";
import "./ProductCard.css";

interface ProductCardProps {
  item: FinalResult;
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={item.data.images?.[0]?.main} height="120px" width="120px" alt="" />
      </div>
      <div className="product-card-title">{item.data.title}</div>
      <div className="product-card-bages"></div>
      <div className="price-container">
        <span className="price">{item.data.price.toLocaleString()}</span>
        <span className="price-bagde-unit">تومان</span>
      </div>
    </div>
  );
};

export default ProductCard;
