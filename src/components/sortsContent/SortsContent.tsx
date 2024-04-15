import { CloseCircle } from "iconsax-react";
import { FC } from "react";
import "./SortsContent.css";

interface SortsContentProps {
  onClose: () => void;
}

const SortsContent: FC<SortsContentProps> = (onClose) => {
  return (
    <div>
      <div className="sort-container">
        <span>مرتب سازی</span>
        <CloseCircle size={24} />
      </div>
    </div>
  );
};

export default SortsContent;
