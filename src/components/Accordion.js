import { useState } from "react";
import { GoTriangleDown, GoTriangleLeft} from "react-icons/go";

function Accordion({items}) {
    const[expandedIndex, setExpandedIndex] = useState(-1);
    const handleClick = (nextIndex) => {
        if(expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        } else {
        setExpandedIndex(nextIndex);
        }
    }
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span className="text-2xl">{isExpanded ? <GoTriangleDown /> : <GoTriangleLeft />}</span>
        const content = isExpanded && <div className="border-b p-5">{item.content}</div>
        return(
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>handleClick(index)}>{item.label}{icon}</div>
                {content}
            </div>
        );
    });
    return<div className="border-t border-x rounded">{renderedItems}</div>
};

export default Accordion;