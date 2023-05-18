import { Container } from "../common/Container/Container";
import { HeroPartnership } from "./HeroPartnership/HeroPartnership";
import { HeroSearch } from "./HeroSearch/HeroSearch";
import { HeroSectionStyle } from "./HeroSection.styled";
import { HeroTitle } from "./HeroTitle/HeroTitle";
import { SloganList } from "./SloganList/SloganList";

export const HeroSection = () => {

    return (
        <HeroSectionStyle>
            <Container>
                <div className="gradient-bg"></div>
                <div className="left-side">
                    <HeroTitle />
                    <div>
                        <HeroSearch />
                        <HeroPartnership />
                    </div>
                </div>
                <div className="right-side">
                    <SloganList />
                </div>
            </Container>
        </HeroSectionStyle>
    )
};