import { useState } from "react";
import { Logo } from "../../common/Logo/Logo"
import { MobileMenuBarStyle } from "./MobileMenuBar.styled";
import { GiHamburgerMenu } from "react-icons/gi"
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { GrClose } from "react-icons/gr"

const body = document.body;

export const MobileMenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

     if (isMenuOpen) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }


    return (
        <>
            <BurgerMenu activeClassName={isMenuOpen ? "active" : null} />
            <MobileMenuBarStyle>
                <Logo />
                <button
                    onClick={handleClick}
                    className="menu-btn"
                    type="button">{ isMenuOpen ? <GrClose/> : <GiHamburgerMenu />  }
                </button>
            
            </MobileMenuBarStyle>
        </>

    )
};