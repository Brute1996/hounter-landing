import { MenuLinkList } from "../../MenuLinkList/MenuLinkList";
import { SignUpBtn } from "../../SignUpBtn/SignUpBtn";
import { BurgerMenuStyle } from "./BurgerMenu.styled";

export const BurgerMenu = ({activeClassName}) => {
    
    return (
        <BurgerMenuStyle className={activeClassName}>
            <MenuLinkList />
            <SignUpBtn/>
        </BurgerMenuStyle>
    )
};