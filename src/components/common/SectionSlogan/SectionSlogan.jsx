import { SectionSloganStyle } from "./SectionSlogan.styled";

export const SectionSlogan = ({children}) => {
    return (
        <SectionSloganStyle className="section-slogan">{children}</SectionSloganStyle>
    )
};