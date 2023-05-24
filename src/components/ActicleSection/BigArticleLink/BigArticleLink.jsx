import { BigArticleLinkWrapper } from "./BigArticleLink.styled"
import { ArticleAuthor } from "../ArticleAuthor/ArticleAuthor";
import { ArticleTimeToRead } from "../ArticleTimeToRead/ArticleTimeToRead";

export const BigArticleLink = ({
    articleImage,
    articleTitle,
    authorAvatar,
    authorName,
    articleShortText,
    minutesToRead,
    articleCreateDate
}) => {
    return (
        <BigArticleLinkWrapper>
            <a href="#!">
                <img className="article-image" src={articleImage} alt={articleTitle} />
                <ArticleAuthor authorAvatar={authorAvatar} authorName={authorName} />
                <h4 className="article-title">{articleTitle}</h4>
                <p className="article-short-text">{articleShortText}</p>
                <ArticleTimeToRead
                    minutesToRead={minutesToRead}
                    articleCreateDate={articleCreateDate}
                />
            </a>
        </BigArticleLinkWrapper>
    )
};