import { Container } from "../common/Container/Container";
import { SectionSlogan } from "../common/SectionSlogan/SectionSlogan"
import { SectionTitle } from "../common/SectionTitle/SectionTitle"
import { avatar18, bigArticleImg } from "../../images";
import { ActicleSectionWrapper } from "./ActicleSection.styled"
import { ArticleLinkList } from "./ArticleLinkList/ArticleLinkList";
import { BigArticleLink } from "./BigArticleLink/BigArticleLink";
import { PrimaryButton } from "../common/PrimaryButton/PrimaryButton";

export const ActicleSection = () => {
    return (
        <ActicleSectionWrapper>
            <Container>
                {/* <div className="gradient-bg"></div> */}
                <SectionTitle>See tips and trick from our partnership</SectionTitle>
                <SectionSlogan>Find out more about selling and buying homes</SectionSlogan>
                <div className="more-article-link-wrapper">
                    <PrimaryButton linkHref="#!">More Artikel</PrimaryButton>
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