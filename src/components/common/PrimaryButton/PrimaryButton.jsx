import { PrimaryButtonStyle, PrimaryLinkStyle } from "./PirmaryButton.styled"

export const PrimaryButton = ({ buttonType, linkHref, children, gap, handleClick }) => {


    
    if (buttonType) {
        return <PrimaryButtonStyle className="primary-button" onClick={handleClick} style={{gap}} type={buttonType}>{children}</PrimaryButtonStyle>
    }

    if (linkHref) {
        return <PrimaryLinkStyle className="primary-button" style={{gap}} href={linkHref}>{children}</PrimaryLinkStyle>
    }
}