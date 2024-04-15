import "./SearchInput.css";
import searchIcon from "../../assets/Images/search.svg"
import LabeledIcon from "../shared/labeledIcon/LabeledIcon";

const SearchInput = () => {
    return (
        <div className="wrapper">
            <div className="search-input-container">
                <input className="search-input" />
                <LabeledIcon icon={searchIcon} width={28} height={28} />
            </div>
        </div>
    )
}

export default SearchInput