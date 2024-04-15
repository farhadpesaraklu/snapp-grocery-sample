import SearchIcon from "../../assets/Images/search.svg"
import "./SearchAndSort.css";
import sortIcon from "../../assets/Images/sort.svg"
import settingIcon from "../../assets/Images/setting.svg"
import LabeledIcon from "../shared/labeledIcon/LabeledIcon";
import { useNavigate } from "react-router-dom";
import { RouteEnums } from "../../utils/enums/routeEnum";

const SearchAndSort = () => {
    const navigate = useNavigate()

    return (
        <div className="search-and-sort-container">
            <div className="search-icon">
                <LabeledIcon icon={SearchIcon} width={28} height={28} onClick={() => navigate(`/${RouteEnums.SEARCH}`)} />
            </div>

            <div className="sort-container">
                <LabeledIcon icon={sortIcon} title="مرتب سازی" onClick={() => null} />
                <LabeledIcon icon={settingIcon} title="فیلتر" onClick={() => null} />
            </div>
        </div>
    )
}

export default SearchAndSort