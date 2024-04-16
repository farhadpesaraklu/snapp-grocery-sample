import { CloseCircle } from "iconsax-react";
import { FC, useState } from "react";
import "./FiltersContent.css"
import GroupButton from "../groupButton/GroupButton";
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
      <div>
        <div className="filter-row">
          <span className="filter-title">فیلترها</span>
          <CloseCircle size={24} onClick={() => setIsFilterOpen(false)} />
        </div>
        <div className="filter-row">
          <span className="filter-normal-text">موجود</span>
          <label className="switch">
            <input type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="filter-row">
          <span className="filter-normal-text">دارای تخفیف</span>
          <label className="switch">
            <input type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="container-btn">
        <button className='delete-btn'  >حذف همه</button>
        <button className='action-btn'  >اعمال</button>
      </div>

    </div>
  );
};

export default FiltersContent;
