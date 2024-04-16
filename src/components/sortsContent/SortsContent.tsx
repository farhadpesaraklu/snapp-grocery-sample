import { FC } from "react";
import { CloseCircle } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";

import "./SortsContent.css";
import { setSortValue } from "../../store/reducers/filterArrayReducer";
import { RootState } from "../../store/store";
import { FilterDetail } from "../../services/vendorProductCategoryService/type";
import textConstants from "../../constants/textConstants";

interface SortsContentProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sorts: FilterDetail[];
}

const SortsContent: FC<SortsContentProps> = ({ setOpen, sorts }) => {
  const dispatch = useDispatch();
  const selectedSort = useSelector((state: RootState) => state.filterList.sortValue);
  const handleSortChange = (value: string) => {
    if (selectedSort === value) {
      dispatch(setSortValue(""));
    } else {
      dispatch(setSortValue(value));
    }
    setOpen(false);
  };

  return (
    <div className="sort-container">
      <div className="sort-row">
        <span>{textConstants.sortTitle}</span>
        <CloseCircle size={24} onClick={() => setOpen(false)} />
      </div>
      {sorts?.map((sortItem) => {
        return (
          <div className="sort-row" onClick={() => handleSortChange(sortItem.value)}>
            <span>{sortItem.title}</span>
            <input
              type="checkbox"
              className="radio"
              onChange={() => handleSortChange(sortItem.value)}
              value={sortItem.value}
              checked={selectedSort === sortItem.value}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SortsContent;
