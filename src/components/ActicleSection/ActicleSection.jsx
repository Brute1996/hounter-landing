import { Container } from "../common/Container/Container";
import { SectionSlogan } from "../common/SectionSlogan/SectionSlogan"
import { SectionTitle } from "../common/SectionTitle/SectionTitle"
import { avatar18, bigArticleImg } from "../common/images";
import { ActicleSectionWrapper } from "./ActicleSection.styled"
import { ArticleLinkList } from "./ArticleLinkList/ArticleLinkList";
import { BigArticleLink } from "./BigArticleLink/BigArticleLink";

export const ActicleSection = () => {
    return (
        <ActicleSectionWrapper>
            <Container>
                <SectionTitle>See tips and trick from our partnership</SectionTitle>
                <SectionSlogan>Find out more about selling and buying homes</SectionSlogan>
                <div className="more-article-link-wrapper">
                    <a className="more-article-link" href="/">More Artikel</a>
                </div>
                <div className="section-content">
                    <ArticleLinkList />

                    <BigArticleLink
                        articleImage={bigArticleImg}
                        articleTitle="12 Things to know before buying a house"
                        authorAvatar={avatar18}
                        authorName="Cameron Williamson"
                        articleShortText="Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house"
                        minutesToRead="8"
                        articleCreateDate="25 Apr 2021"
                    />
                </div>
            </Container>
        </ActicleSectionWrapper>
    )
};