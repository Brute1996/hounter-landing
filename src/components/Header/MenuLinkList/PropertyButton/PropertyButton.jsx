import { useEffect, useRef, useState } from "react"
import { ReactComponent as PropertyArowIcon} from "../../../../icons/arrow.svg"
import { PropertyButtonWrapper } from "./PropertyButton.styled";


export const PropertyButton = () => {
    

    const [isDropDownActive, setIsDropDownActive] = useState(false);

    const dropDownMenuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!dropDownMenuRef.current.contains(e.target)) {
                setIsDropDownActive(false)
            }
 
        };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    return (
        <PropertyButtonWrapper ref={dropDownMenuRef}>
            <button
                type="button"
                onClick={() => setIsDropDownActive(!isDropDownActive)}
                className={
                    `property-button ${isDropDownActive ? "active" : ""}`}>
                Property
                <PropertyArowIcon className="property-arrow-icon" />
            </button>
            <div
                className={
                `property-dropdown-menu ${isDropDownActive && "active"}`}>
                <ul>
                    <li><a onClick={()=> setIsDropDownActive(false)} className="property-dropdown-menu-link" href="#!">House</a></li>
                    <li><a onClick={()=> setIsDropDownActive(false)} className="property-dropdown-menu-link" href="#!">Villa</a></li>
                    <li><a onClick={()=> setIsDropDownActive(false)}  className="property-dropdown-menu-link"href="#!">Apartment</a></li>
                </ul>
            </div>
        </PropertyButtonWrapper>
    )
};