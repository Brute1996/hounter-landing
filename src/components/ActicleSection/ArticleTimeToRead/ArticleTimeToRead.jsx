import { ClockIcon } from "../../../icons";
import { ArticleTimeToReadStyle } from "./ArticleTimeToRead.styled"

export const ArticleTimeToRead = ({minutesToRead, articleCreateDate}) => {
    return (
        <ArticleTimeToReadStyle>

           {<ClockIcon />} {`${minutesToRead} min read | ${articleCreateDate}`}
        </ArticleTimeToReadStyle>
    )
};