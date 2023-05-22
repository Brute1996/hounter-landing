import { ArticleTimeToReadStyle } from "./ArticleTimeToRead.styled"
import {ReactComponent as ClockIcon} from "../icons/access-time.svg"

export const ArticleTimeToRead = ({minutesToRead, articleCreateDate}) => {
    return (
        <ArticleTimeToReadStyle>
            <span><ClockIcon /></span><p>{`${minutesToRead} min read | ${articleCreateDate}`}</p>
        </ArticleTimeToReadStyle>
    )
};