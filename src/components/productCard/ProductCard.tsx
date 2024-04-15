import { FC } from "react";
import "./ProductCard.css";
import ProductImg from "../../assets/Images/productTest (1).webp";
const array = [
    {
        title: " شیر پرچرب کودک ماجان کاله ۲۰۰ میلی لیتری",
        img: ProductImg,
        price: 33300,
    },
    {
        title: " شیر پرچرب کودک ماجان کاله ۲۰۰ میلی لیتری",
        img: ProductImg,
        price: 33300,
    },
    {
        title: " شیر پرچرب کودک ماجان کاله ۲۰۰ میلی لیتری",
        img: ProductImg,
        price: 33300,
    },
    {
        title: " شیر پرچرب کودک ماجان کاله ۲۰۰ میلی لیتری",
        img: ProductImg,
        price: 33300,
    },
    {
        title: " شیر پرچرب کودک ماجان کاله ۲۰۰ میلی لیتری",
        img: ProductImg,
        price: 33300,
    },
];
const ProductCard: FC = () => {
    return (
        <div className="row">
            {array.map((item, index) => (
                <div className="product-card">
                    <div className="product-img">
                        <img src={item.img} height="120px" width="120px" alt="" />
                    </div>

                    <div className="product-card-title">{item.title}</div>
                    <div className="product-card-bages"></div>
                    <div className="price-container">
                        <span className="price">{item.price.toLocaleString()}</span>
                        <span className="price-bagde-unit">تومان</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;