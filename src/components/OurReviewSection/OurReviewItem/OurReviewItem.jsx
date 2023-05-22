
import { StarIcon } from "../../../icons";
import { OurReviewItemWrapper } from "./OurReviewItem.styled"

export const OurReviewItem = ({
    itemImage,
    managerAvatar,
    managerName,
    managerPosition,
    commentTitle,
    commentText,
    managerScore }) => {
    return (
        <OurReviewItemWrapper>
            <img className="item-image" src={itemImage} alt="reviewed building" />
            <div className="item-comment">
                <h4 className="comment-title">{commentTitle}</h4>
                <p className="comment-text">{commentText}</p>
                <div className="manager-info-wrapper">
                    <div className="manager-info"> 
                        <img className="manager-avatar" src={managerAvatar} alt="manager avatar" />
                        <div>
                            <p className="manager-name" aria-label="manager name">{managerName}</p>
                            <p className="manager-position" aria-label="manager position">{managerPosition}</p>
                        </div>
                    </div>
                    <p className="manager-score" aria-label="manager-score"><StarIcon />{managerScore}</p>
                </div>
            </div>
        </OurReviewItemWrapper>
    )
};