import { ArrowIcon, SearchIcon } from "../../../icons";
import { HeroSearchWrapper } from "./HeroSearch.styled";

export const HeroSearch = () => {
    return (
        <HeroSearchWrapper>
            <form>
                <label>
                    <span><SearchIcon className="search-icon" /></span>
                    <input
                        type="search"
                        placeholder="Search for the location you want!"
                    />
                    <button type="button">Search <ArrowIcon className="arrow-icon" /></button>
                </label>
            </form>
        </HeroSearchWrapper>
    )
};