import { MenuLinkListStyle } from "./MenuLinkList.styled";
import { PropertyButton } from "./PropertyButton/PropertyButton";

export const MenuLinkList = () => {
    return (
        <MenuLinkListStyle>
            <li>
                <a className="link-btn"
                    href="/">About Us</a>
            </li>
            <li>
                <a className="link-btn" href="/">Article</a>
            </li>
            <PropertyButton />
        </MenuLinkListStyle>
    )
};