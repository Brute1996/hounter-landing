import { useState } from "react";
import { Logo } from "../../common/Logo/Logo"
import { MobileMenuBarStyle } from "./MobileMenuBar.styled";
import { GiHamburgerMenu } from "react-icons/gi"
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

export const MobileMenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <BurgerMenu activeClassName={isMenuOpen ? "active" : null} />
            <MobileMenuBarStyle>
                <Logo />
                <button
                    onClick={handleClick}
                    className="menu-btn"
                    type="button"><GiHamburgerMenu />
                </button>
            
            </MobileMenuBarStyle>
        </>

    )
};