import {FC, useEffect, useRef, useState, Ref} from "react";
import "./Categories.css"
import {useLocation} from "react-router";
import tempPic from "../../assets/Images/expressLogo.svg"

interface Item {
    id: string;
    text: string
}

interface CategoriesProps {
    items: Item[]
}

const Categories: FC<CategoriesProps> = ({items}) => {
    const itemRefs = useRef<HTMLDivElement[]>([]); // Use HTMLDivElement[] for specificity

    const [selectedItemId, setSelectedItemId] = useState<string | null>(
        sessionStorage.getItem("selectedCategoryId")
    );

    const location = useLocation();
    const handleItemClick = (item: Item) => {
        setSelectedItemId(item.id);
        sessionStorage.setItem("selectedCategoryId", item.id);
    };

    useEffect(() => {
        if (selectedItemId) {
            const selectedItemRef = itemRefs.current.find(
                (ref) => ref?.id === selectedItemId
            );

            if (selectedItemRef) {
                selectedItemRef.scrollIntoView({behavior: "smooth"});
            }
        }
    }, [selectedItemId]);


    return (
        <div className="scrollable-container">
            {items.map((item: Item) => (

                <div
                    ref={(ref) => (itemRefs.current[item.id] = ref)}
                    key={item.id}
                    className={`item ${selectedItemId === item.id ? 'selected' : ''}`}
                    data-id={item.id} // Use data-id for selection
                    onClick={() => handleItemClick(item)}
                >
                    <span>{item.text}</span>
                    <img src={tempPic} alt="pic" width={48} height={48}/>
                </div>
            ))}
        </div>
    )
}
export default Categories
