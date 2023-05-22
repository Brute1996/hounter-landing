import { articleImg1, articleImg2, articleImg3, avatar1, avatar15, avatar17 } from "../../../images";
import { ArticleLink } from "../ArticleLink/ArticleLink"
import { ArticleLinkListWrapper } from "./ArticleLinkList.styled"

export const ArticleLinkList = () => {
    return (
        <ArticleLinkListWrapper>
            <ArticleLink
                articleImage={articleImg1}
                articleTitle="The things we need to check when we want to buy a house"
                authorAvatar={avatar1}
                authorName="Dianne Russell"
                minutesToRead="4"
                articleCreateDate="25 Apr 2021"
            />

            <ArticleLink
                articleImage={articleImg2}
                articleTitle="7 Ways to distinguish the quality of the house we want to buy"
                authorAvatar={avatar15}
                authorName="Courtney Henry"
                minutesToRead="6"
                articleCreateDate="24 Apr 2021"
            />

            <ArticleLink
                articleImage={articleImg3}
                articleTitle="The best way to know the quality of the house we want to buy"
                authorAvatar={avatar17}
                authorName="Darlene Robertson"
                minutesToRead="2"
                articleCreateDate="24 Apr 2021"
            />
        </ArticleLinkListWrapper>
    )
};