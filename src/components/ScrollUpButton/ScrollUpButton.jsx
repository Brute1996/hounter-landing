import ScrollToTop from "react-scroll-up"
import { ScrollUpButtonStyle } from "./ScrollUpButton.stylde"
import { ArrowIcon } from "../../icons";

export const ScrollUpButton = () => {
    return (
        <ScrollToTop style={{zIndex:"2", borderRadius:"50%"}} showUnder={160}>
            <ScrollUpButtonStyle><ArrowIcon className="arrow-icon"/></ScrollUpButtonStyle>
        </ScrollToTop>
    )
};