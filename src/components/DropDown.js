import { useEffect, useState, useRef } from "react";
import { GoChevronDown } from "react-icons/go";

function DropDown({ options, selection, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();
    useEffect(()=> {
        const handler = (event)=> {
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelect(option);
    }
    const renderedOptions = options.map((option)=> {
        return<div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=> handleOptionClick(option)} key={option.value}>{option.label}</div>
    })
    let content = 'select...';
    if(selection){
        content =selection.label;
    }
    return(<div ref={divEl} className="w-48 relative">
        <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>{content}<GoChevronDown className="text-lg"/></div>
        {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full" >{renderedOptions}</div>}
    </div>)
}

export default DropDown;