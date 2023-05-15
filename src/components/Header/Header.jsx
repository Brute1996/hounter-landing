import { Logo } from "../common/Logo/Logo"
import { HeaderStyle } from "./Header.styled"
import { PropertyButton } from "./PropertyButton/PropertyButton";

export const Header = () => {


    return (
        <HeaderStyle>
            <nav>
                <Logo />
                <div className="buttons-wrapper">
                    <ul className="header-link-list">
                        <li>
                            <a className="header-link"
                                href="/">About Us</a> 
                        </li>
                        <li>
                            <a className="header-link" href="/">Article</a>
                        </li>
                        <PropertyButton/>
                        
                    </ul>
                    <button type="button" className="sign-up-btn">Sign Up!</button>
                </div>
            </nav>
        </HeaderStyle>

    );
};