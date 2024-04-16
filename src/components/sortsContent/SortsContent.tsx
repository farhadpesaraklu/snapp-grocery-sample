import { CloseCircle } from "iconsax-react";
import { FC, useState } from "react";
import "./SortsContent.css";
import { useDispatch, useSelector } from "react-redux";
import { setSortValue } from "../../store/reducers/filterArrayReducer";
import { RootState } from "../../store/store";


interface SortsContentProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type SortValue = 'least_expensive' | 'most_expensive' | "";

const SortsContent: FC<SortsContentProps> = ({ setOpen }) => {
  const dispatch = useDispatch()
  const selectedSort = useSelector((state: RootState) => state.filterList.sortValue)
  const handleSortChange = (value: SortValue) => {
    if (selectedSort === value) {
      dispatch(setSortValue(""))
    } else {
      dispatch(setSortValue(value))
    }
    setOpen(false);
  };

  return (
    <div className="sort-container">
      <div className="sort-row">
        <span>مرتب سازی</span>
        <CloseCircle size={24} onClick={() => setOpen(false)} />
      </div>
      <div className="sort-row">
        <span>ارزان ترین</span>
        <input type="checkbox" className="radio" onChange={() => handleSortChange('least_expensive')}
          value="least_expensive" checked={selectedSort === 'least_expensive'} />
      </div>
      <div className="sort-row">
        <span>گران ترین</span>
        <input type="checkbox" className="radio" onChange={() => handleSortChange('most_expensive')}
          value="most_expensive"
          checked={selectedSort === 'most_expensive'} />
      </div>
    </div>
  );
};

export default SortsContent;
