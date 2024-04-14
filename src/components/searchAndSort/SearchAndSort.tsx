import SearchIcon from "../../assets/Images/search.svg"
import "./SearchAndSort.css";
import sortIcon from "../../assets/Images/sort.svg"
import settingIcon from "../../assets/Images/setting.svg"
import LabeledIcon from "../shared/labeledIcon/LabeledIcon";

const SearchAndSort = () => {
    return (
        <div className="search-and-sort-container" >
            <div className="search-icon" >
                <LabeledIcon icon={SearchIcon} width={28} height={28} />
                {/* <img src={SearchIcon} alt='' /> */}
            </div>


            <div className="sort-container">
                <LabeledIcon icon={sortIcon} title="مرتب سازی" />
                <LabeledIcon icon={settingIcon} title="فیلتر" />
            </div>
        </div>
    )
}

export default SearchAndSort