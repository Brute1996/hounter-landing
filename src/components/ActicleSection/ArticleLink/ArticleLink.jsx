import { ArticleAuthor } from "../ArticleAuthor/ArticleAuthor"
import { ArticleTimeToRead } from "../ArticleTimeToRead/ArticleTimeToRead"

import { ArticleLinkWrapper } from "./ArticleLink.styled"

export const ArticleLink = ({
    articleImage,
    articleTitle,
    authorAvatar,
    authorName,
    minutesToRead,
    articleCreateDate
}) => {
    return (
        <ArticleLinkWrapper>
            <a href="#!">
                <img className="article-image" src={articleImage} alt={articleTitle} />
                <div className="article-info">
                    <ArticleAuthor authorAvatar={authorAvatar} authorName={authorName} />
                    <h4 className="article-title">{articleTitle}</h4>
                    <ArticleTimeToRead
                        minutesToRead={minutesToRead}
                        articleCreateDate={articleCreateDate}
                    />
                </div>
            </a>
        </ArticleLinkWrapper>
    )
};