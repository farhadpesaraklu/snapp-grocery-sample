import {FC} from "react";
import "./ProductCard.css";

interface ProductCardProps {
    item: {
        title: string,
        img: string,
        price: number,
    }
}

const ProductCard: FC<ProductCardProps> = ({item}) => {
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={item.img} height="120px" width="120px" alt=""/>
            </div>
            <div className="product-card-title">{item.title}</div>
            <div className="product-card-bages"></div>
            <div className="price-container">
                <span className="price">{item.price.toLocaleString()}</span>
                <span className="price-bagde-unit">تومان</span>
            </div>
        </div>
    );
};

export default ProductCard;