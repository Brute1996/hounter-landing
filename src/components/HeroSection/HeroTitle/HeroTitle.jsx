import { SectionText } from "../../common/SectionText/SectionText";
import { HeroTitleWrapper } from "./HeroTitle.styled";

export const HeroTitle = () => {
    return (
        <HeroTitleWrapper>
            <h2 className="hero-title">find the place to live <span>your dreams</span> easily here</h2>
            <SectionText>Everything you need about finding your place to live will be here, where it will be easier for you</SectionText>
        </HeroTitleWrapper>
    )
};