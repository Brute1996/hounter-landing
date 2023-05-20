import { SectionTitleStyle } from "./SectionTitle.styled";

export const SectionTitle = ({children}) => {
    return (
        <SectionTitleStyle className="section-title">{children}</SectionTitleStyle>
    )
};