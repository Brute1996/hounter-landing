import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../icons";
import { Container } from "../common/Container/Container";
import { Logo } from "../common/Logo/Logo"
import { FooterWrapper } from "./Footer.styled"
import { FooterInfoLinkList } from "./FooterInfoLinkList/FooterInfoLinkList";

export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <div className="social-media">
                    <Logo />
                    <p className="social-media-text">We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
                    <ul className="social-media-list">
                        <li><a href="#!"><FacebookIcon className="social-media-icon"/></a></li>
                        <li><a href="#!"><TwitterIcon className="social-media-icon"/></a></li>
                        <li><a href="#!"><InstagramIcon className="social-media-icon"/></a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <FooterInfoLinkList
                        title="Property"
                        linksArr={[{
                            name: "House",
                            href: "#!"
                        }, {
                            name: "Apartment",
                            href: "#!"
                        }, {
                            name: "Villa",
                            href: "#!"
                        }]}
                    />
                    <FooterInfoLinkList
                        title="Article"
                        linksArr={[{
                            name: "New Article",
                            href: "#!"
                        },
                        {
                            name: "Popular Article",
                            href: "#!"
                        },
                        {
                            name: "Most Read",
                            href: "#!"
                        },
                        {
                            name: "Tips & Tricks",
                            href: "#!"
                        }]}
                    />
                    <address>
                        <FooterInfoLinkList
                            title="Contact"
                            linksArr={[{
                                name: "2464 Royal Ln. Mesa, New Jersey 45463",
                                href: "#!"
                            },
                            {
                                name: "(671) 555-0110",
                                href: "tel:6715550110"
                            },
                            {
                                name: "info@hounter.com",
                                href: "mailto:info@hounter.com"
                            }]}
                        />
                    </address>
                </div>
            </Container>
        </FooterWrapper>
    )
};