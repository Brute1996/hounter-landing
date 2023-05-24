import { ClockIcon } from "../../../icons";
import { ArticleTimeToReadStyle } from "./ArticleTimeToRead.styled"

export const ArticleTimeToRead = ({minutesToRead, articleCreateDate}) => {
    return (
        <ArticleTimeToReadStyle className="time-to-read">

           {<ClockIcon />} {`${minutesToRead} min read | ${articleCreateDate}`}
        </ArticleTimeToReadStyle>
    )
};