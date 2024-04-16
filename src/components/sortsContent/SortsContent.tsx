import { CloseCircle } from "iconsax-react";
import { FC } from "react";
import "./SortsContent.css";

interface SortsContentProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SortsContent: FC<SortsContentProps> = ({ setOpen }) => {

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
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
        <input type="checkbox" className="radio" onChange={handleSortChange} value="least_expensive" />
      </div>
      <div className="sort-row">
        <span>گران ترین</span>
        <input type="checkbox" className="radio" onChange={handleSortChange} value="most_expensive" />
      </div>
    </div>
  );
};

export default SortsContent;
