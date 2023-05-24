import { PrimaryButtonStyle } from "./PirmaryButton.styled"

export const PrimaryButton = ({ buttonType, linkHref, children, gap, handleClick }) => {


    
    if (buttonType) {
        return <PrimaryButtonStyle as="button" className="primary-button" onClick={handleClick} style={{gap}} type={buttonType}>{children}</PrimaryButtonStyle>
    }

    if (linkHref) {
        return <PrimaryButtonStyle as="a" className="primary-button" style={{gap}} href={linkHref}>{children}</PrimaryButtonStyle>
    }
}