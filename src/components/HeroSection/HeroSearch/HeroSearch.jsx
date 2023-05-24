import { ArrowIcon, SearchIcon } from "../../../icons";
import { PrimaryButton } from "../../common/PrimaryButton/PrimaryButton";
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
                    <PrimaryButton buttonType="button" gap="4px"  >Search <ArrowIcon className="arrow-icon" /></PrimaryButton>
                </label>
            </form>
        </HeroSearchWrapper>
    )
};