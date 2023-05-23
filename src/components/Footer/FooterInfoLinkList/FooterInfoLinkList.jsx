import { FooterInfoLinkListWrapper } from "./FooterInfoLinkList.styled"

export const FooterInfoLinkList = ({ title, linksArr }) => {
    return (
        <FooterInfoLinkListWrapper>
                <h3 className="links-title">{title}</h3>
                <ul className="links-list">
                    {linksArr && linksArr.map((link, index) => <li key={index} className="link"><a href={link.href || "#!"}>{link.name}</a></li>)}
                </ul>
        </FooterInfoLinkListWrapper>
    )
};