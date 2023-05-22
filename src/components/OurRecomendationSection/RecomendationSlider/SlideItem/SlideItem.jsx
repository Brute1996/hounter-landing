import { FireIcon, NewHouseIcon, WalletIcon } from "../../../../icons";
import { SlideItemWrapper } from "./SlideItem.styled"


export const SlideItem = ({ filterType, image, labelType, title, price, sellerAvatar, sellerName, sellerLocation }) => {

    const label = () => {
        switch (labelType) {
            case "popular":
                return (
                    <div className={`label popular`}>
                        <FireIcon/>
                        <p>Popular</p>
                    </div>
                );
            case "new-house":
                return (
                    <div className={`label new-house`}>
                        <NewHouseIcon/>
                        <p>New house</p>
                    </div>
                );
            case "best-deals":
                return (
                    <div className={`label best-deals`}>
                        <WalletIcon/>
                        <p>Best deals</p>
                    </div>
                );
            default:
                return <></>
        }
    };
    
    return (
        <SlideItemWrapper data-filter-type={filterType}>
            <div className="image-wrapper">
                <img className="image" src={image} alt={title} />
                {label()}
            </div>
            <h3 className="title">{title}</h3>
            <p className="price" aria-label="price">{price}</p>

            <div className="seller-wrapper" aria-label="seller">
                <img className="seller-avatar" src={sellerAvatar} alt={`${sellerName} avatar`} />
                <div>
                    <p className="seller-name" aria-label="seller name">{sellerName}</p>
                    <p className="seller-location" aria-label="seller location">{sellerLocation}</p>
                </div>
            </div>
        </SlideItemWrapper>
    )
};