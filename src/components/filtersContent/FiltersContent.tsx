import { FC, useState } from "react";
import { CloseCircle } from "iconsax-react";

import { FilterDetail, Section } from "../../services/vendorProductCategoryService/type";
import "./FiltersContent.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addfiltersValues } from "../../store/reducers/filterArrayReducer";
import textConstants from "../../constants/textConstants";
interface FiltersContentProps {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filtersList: Section;
}

interface FiltersRowProps {
  item: FilterDetail;
  handleClick: () => void;
  isChecked: boolean;
}

const FiltersRow: FC<FiltersRowProps> = ({ item, handleClick, isChecked }) => (
  <div className="filter-row">
    <span className="filter-normal-text">{item.title}</span>
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleClick} />
      <span className="slider round"></span>
    </label>
  </div>
);

const FiltersContent: FC<FiltersContentProps> = ({ setIsFilterOpen, filtersList }) => {
  const dispatch = useDispatch();
  const selectedFiltersList = useSelector((state: RootState) => state.filterList.filterValuesList);

  const [selectedFilters, setSelectedFilters] = useState<string[]>(selectedFiltersList);

  const handleClickFilter = (item: FilterDetail) => {
    if (!selectedFilters.includes(item.value)) {
      setSelectedFilters([...selectedFilters, item.value]);
    } else {
      const newFiltersList = selectedFilters.filter((filterValue) => filterValue !== item.value);

      setSelectedFilters(newFiltersList);
    }
  };

  return (
    <div className="filter-container">
      <div>
        <div className="filter-row">
          <span className="filter-title">{textConstants.filtersTitle}</span>
          <CloseCircle size={24} onClick={() => setIsFilterOpen(false)} />
        </div>

        {filtersList?.data?.map((item) => {
          return (
            <FiltersRow
              key={item.value}
              item={item}
              isChecked={selectedFilters.includes(item.value)}
              handleClick={() => handleClickFilter(item)}
            />
          );
        })}
      </div>
      <div className="container-btn">
        <button
          className="delete-btn"
          onClick={() => {
            setSelectedFilters([]);
            dispatch(addfiltersValues([]));
            setIsFilterOpen(false);
          }}
        >
          {textConstants.deleteAllBtnTitle}
        </button>
        <button
          className="action-btn"
          onClick={() => {
            dispatch(addfiltersValues(selectedFilters));
            setIsFilterOpen(false);
          }}
        >
          {textConstants.applyBtnTitle}
        </button>
      </div>
    </div>
  );
};

export default FiltersContent;
