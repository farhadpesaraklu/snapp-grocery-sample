import SearchAndSort from "../../components/searchAndSort/SearchAndSort"
import Categories from "../../components/categories/Categories";
import ProductCard from "../../components/productCard/ProductCard";

const Supermarket = () => {
    return (
        <div>
            <SearchAndSort/>
            <Categories items={tempCategory}/>
            <ProductCard/>
        </div>
    )
}

export default Supermarket

const tempCategory = [{id: "1", text: "موادغذایی"}, {id: "2", text: "پوشاک کودک"}, {id: "3", text: "اسباب بازی کودک"}, {
    id: "4",
    text: "بهداشت کودک"
}, {id: "5", text: "پوشاک"}, {id: "6", text: "پوشاک"}, {id: "7", text: "پوشاک"}, {id: "8", text: "پوشاک"}]