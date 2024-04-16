import { FC, useEffect, useRef, useState } from "react";

import "./SubCategories.css";
import { Category } from "../../services/vendorProductCategoryService/type";

interface SubCategoriesProps {
  items: Category[];
  handleClickSubCategory: React.Dispatch<React.SetStateAction<number | null>>;
}

const SubCategories: FC<SubCategoriesProps> = ({ items, handleClickSubCategory }) => {
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [selectedItemId, setSelectedItemId] = useState<number | null>(
    Number(sessionStorage.getItem("selectedCategoryId")),
  );
  const handleItemClick = (item: Category) => {
    setSelectedItemId(item.id);
    sessionStorage.setItem("selectedCategoryId", item.id.toString());
    handleClickSubCategory(item.id);
  };

  useEffect(() => {
    if (selectedItemId) {
      const selectedItemRef = itemRefs.current[selectedItemId];

      if (selectedItemRef) {
        selectedItemRef.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedItemId]);

  return (
    <div className="scrollable-container">
      {items.map((item) => (
        <div
          ref={(ref) => (itemRefs.current[item.id] = ref)}
          key={item.id}
          className={`item ${selectedItemId === item.id ? "selected" : ""}`}
          data-id={item.id}
          onClick={() => handleItemClick(item)}
        >
          <span className="product-name">{item.title}</span>
          <img src={item.image} alt="pic" width={48} height={48} />
        </div>
      ))}
    </div>
  );
};
export default SubCategories;
