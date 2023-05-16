import { Logo } from "../../common/Logo/Logo"
import { MenuLinkList } from "../MenuLinkList/MenuLinkList";
import { SignUpBtn } from "../SignUpBtn/SignUpBtn";
import { DesktopMenuStyle } from "./DesktopMenu.styled";

export const DesktopMenu = () => {
    return (
        <DesktopMenuStyle>
            <Logo />
            <div className="buttons-wrapper">
                <MenuLinkList />
                <SignUpBtn />
            </div>
        </DesktopMenuStyle>
    )
};