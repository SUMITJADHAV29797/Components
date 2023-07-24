import classNames from "classnames";
import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Link({to, children, className, activeClassName}) {
    const { navigate, currentPath} = useContext(NavigationContext);
    const classes = classNames(
        "text-blue-500",
        className,
        currentPath === to && activeClassName,
    )
    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    }
    return<a className={classes} href={to} onClick={handleClick}>{ children }</a>
}

export default Link;