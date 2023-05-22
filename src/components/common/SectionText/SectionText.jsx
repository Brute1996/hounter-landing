import { SectionTextStyle } from "./SectionText.styled"

export const SectionText = ({children}) => {
    return (
        <SectionTextStyle className="section-text">{children}</SectionTextStyle>
    )
}