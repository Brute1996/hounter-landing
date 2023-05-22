import { useState } from "react"
import { ReactComponent as PropertyArowIcon} from "../../../../icons/arrow.svg"
import { PropertyButtonWrapper } from "./PropertyButton.styled";


export const PropertyButton = () => {

    const [isDropDownActive, setIsDropDownActive] = useState(false)

    const handleClick = () => {
        setIsDropDownActive(!isDropDownActive)
    }
    return (
        <PropertyButtonWrapper>
            <button
                type="button"
                onClick={handleClick}
                className={
                `property-button ${isDropDownActive && "active"}`}>
                Property <PropertyArowIcon className="property-arrow-icon"/>
            </button>
            <div className={
                `property-dropdown-menu ${isDropDownActive && "active"}`}>
                    <ul>
                        <li><a href="/">House</a></li>
                        <li><a href="/">Villa</a></li>
                        <li><a href="/">Apartment</a></li>
                    </ul>
                </div>
        </PropertyButtonWrapper>
    )
};