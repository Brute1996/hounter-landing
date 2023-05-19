import { FilterButton } from "./FilterButton/FilterButton"
import { HouseIcon, VilaIcon, ApartmentIcon } from "../icons"
import { FilterButtonListWrapper } from "./FilterButtonList.styled"

export const FilterButtonList = ({setFilterButtonNameClicked, filterButtonNameClicked}) => {


    return (
        <FilterButtonListWrapper>
            <li>
                <FilterButton
                    filterButtonNameClicked={filterButtonNameClicked}
                    setFilterButtonNameClicked={setFilterButtonNameClicked}
                    btnName="House"
                    btnIcon={<HouseIcon className="icon" />}
                />
            </li>
            <li>
                <FilterButton
                    filterButtonNameClicked={filterButtonNameClicked}
                    setFilterButtonNameClicked={setFilterButtonNameClicked}
                    btnName="Villa"
                    btnIcon={<VilaIcon className="icon" />}
                />
            </li>
            <li>
                <FilterButton
                    filterButtonNameClicked={filterButtonNameClicked}
                    setFilterButtonNameClicked={setFilterButtonNameClicked}
                    btnName="Apartment"
                    btnIcon={<ApartmentIcon className="icon" />}
                />
            </li>
        </FilterButtonListWrapper>
    )
};