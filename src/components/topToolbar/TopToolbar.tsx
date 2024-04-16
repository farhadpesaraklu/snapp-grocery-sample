import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "../../assets/Images/search.svg";
import "./TopToolbar.css";
import sortIcon from "../../assets/Images/sort.svg";
import settingIcon from "../../assets/Images/setting.svg";
import LabeledIcon from "../shared/labeledIcon/LabeledIcon";
import { RouteEnums } from "../../utils/enums/routeEnum";
import BottomSheet from "../shared/bottomSheet/BottomSheet";
import FiltersContent from "../filtersContent/FiltersContent";
import SortsContent from "../sortsContent/SortsContent";

const TopToolbar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const handleSort = () => {
    setOpen(true);
    setIsFilterOpen(false);
  };

  const handleFilter = () => {
    setIsFilterOpen(true);
    setOpen(false);

  };

  return (
    <>
      <div className="search-and-sort-container">
        <div className="search-icon">
          <LabeledIcon
            icon={SearchIcon}
            width={28}
            height={28}
            onClick={() => navigate(`/${RouteEnums.SEARCH}`)}
          />
        </div>

        <div className="toolbar-sort-container">
          <LabeledIcon icon={sortIcon} title="مرتب سازی" onClick={handleSort} />
          <LabeledIcon icon={settingIcon} title="فیلتر" onClick={handleFilter} />
        </div>
        <BottomSheet
          onClose={() => {
            setOpen(false)
            setIsFilterOpen(false)
          }}
          isOpen={isOpen || isFilterOpen}
          content={isFilterOpen ? <FiltersContent setIsFilterOpen={setIsFilterOpen} /> : <SortsContent setOpen={setOpen} />}
          isFilterOpen={isFilterOpen}
        />
      </div>
    </>
  );
};

export default TopToolbar;
