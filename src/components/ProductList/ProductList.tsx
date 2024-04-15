import React from 'react'
import ProductImg from "../../assets/Images/productTest (1).webp";
import ProductCard from "../productCard/ProductCard";
import "./ProductList.css"

const ProductList = () => {
    return (
        <div className="row">
            {array.map((item, index) => (
                <ProductCard item={item}/>
            ))}
        </div>
    )
}
export default ProductList


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
