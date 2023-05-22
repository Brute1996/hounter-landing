import { ArticleTimeToReadStyle } from "./ArticleTimeToRead.styled"
import {ReactComponent as ClockIcon} from "../icons/access-time.svg"

export const ArticleTimeToRead = ({minutesToRead, articleCreateDate}) => {
    return (
        <ArticleTimeToReadStyle>

           {<ClockIcon />} {`${minutesToRead} min read | ${articleCreateDate}`}
        </ArticleTimeToReadStyle>
    )
};