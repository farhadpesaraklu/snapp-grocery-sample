import { CloseCircle } from "iconsax-react";
import { FC, useState } from "react";
import "./FiltersContent.css"
interface FiltersContentProps {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const FiltersContent: FC<FiltersContentProps> = ({ setIsFilterOpen }) => {

  const [isChecked, setIsChecked] = useState(false)
  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setIsFilterOpen(false);
  };



  return (
    <div className="filter-container">
      <div className="filter-row">
        <span className="filter-title">فیلترها</span>
        <CloseCircle size={24} onClick={() => setIsFilterOpen(false)} />
      </div>
      <div className="filter-row">
        <span className="filter-normal-text">موجود</span>
        <input type="radio" className="radio" onChange={handleSortChange} value="has_stock" />
      </div>
      <div className="filter-row">
        <span className="filter-normal-text">دارای تخفیف</span>
        {/* <input type="radio" className="radio" onChange={handleSortChange} value="has_discount" /> */}
        <label className="switch">
          <input type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default FiltersContent;
