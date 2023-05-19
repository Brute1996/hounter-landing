import { FilterButtonStyle } from "./FilterButton.styled"

export const FilterButton = ({ btnName, btnIcon, setFilterButtonNameClicked, filterButtonNameClicked }) => {

    const handleFilterButtonClick = () => {
        setFilterButtonNameClicked(btnName)
    };


    return (
        <FilterButtonStyle
            onClick={handleFilterButtonClick}
            type="button"
            className={filterButtonNameClicked === btnName ? "active" : null }
        >
            {btnIcon} {btnName}
        </FilterButtonStyle>
    )
}