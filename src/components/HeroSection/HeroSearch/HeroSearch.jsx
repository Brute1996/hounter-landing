import { useRef } from "react";
import { ArrowIcon, SearchIcon } from "../../../icons";
import { PrimaryButton } from "../../common/PrimaryButton/PrimaryButton";
import { HeroSearchWrapper } from "./HeroSearch.styled";

export const HeroSearch = () => {

    const searchIconRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchIcon = searchIconRef.current;
        
        searchIcon.classList.add("animate-icon")

        setTimeout(()=>searchIcon.classList.remove("animate-icon"), 500)
    }

    return (
        <HeroSearchWrapper>
            <form onSubmit={handleSubmit}>
                <label>
                    <span ref={searchIconRef} className="search-icon"><SearchIcon  /></span>
                    <input
                        type="search"
                        placeholder="Search for the location you want!"
                    />
                    <PrimaryButton
                        buttonType="submit"
                        gap="4px"  >Search <ArrowIcon className="arrow-icon" /></PrimaryButton>
                </label>
            </form>
        </HeroSearchWrapper>
    )
};