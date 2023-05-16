import { Container } from "../common/Container/Container";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { HeaderStyle } from "./Header.styled"
import { MobileMenuBar } from "./MobileMenu/MobileMenuBar";

export const Header = () => {


    return (
        <HeaderStyle>
            <Container>
                <DesktopMenu />
                <MobileMenuBar/>
            </Container>
        </HeaderStyle>

    );
};