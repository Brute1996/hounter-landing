import { SectionTitleStyle } from "./SectionTitle.styled";

export const SectionTitle = ({children}) => {
    return (
        <SectionTitleStyle>{children}</SectionTitleStyle>
    )
};