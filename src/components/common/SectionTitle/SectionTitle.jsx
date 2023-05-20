import { SectionTitleStyle } from "./SectionTitle.styled.js"

export const SectionTitle = ({children}) => {
    return (
        <SectionTitleStyle className="section-title">{children}</SectionTitleStyle>
    )
}