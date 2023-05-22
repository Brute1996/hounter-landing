import { ArticleAtuhorStyle } from "./ArticleAuthor.styled";

export const ArticleAuthor = ({authorAvatar, authorName}) => {
    return (
        <ArticleAtuhorStyle>
            <img className="article-author-avatar" src={authorAvatar} alt={authorName} />
            <p className="article-author-name" aria-label="article author name">{authorName}</p>
        </ArticleAtuhorStyle>
    )
};