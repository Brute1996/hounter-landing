
import { BathIcon, BedIcon, CarGarageIcon, StairsIcon } from "../../../icons"
import { HouseDetailWrapper } from "./HouseDetail.styled"
import { HouseDetailItem } from "./HouseDetailList/HouseDetailItem"

export const HouseDetail = () => {
    return (
        <HouseDetailWrapper>
            <h4 className="house-detail-title">House detail</h4>
            <ul className="house-detail-list">
                <HouseDetailItem houseDetailIcon={<BedIcon />} houseDetailText={"4 Bedrooms"} />
                <HouseDetailItem houseDetailIcon={<BathIcon/>} houseDetailText={"2 Bathrooms"}/>
                <HouseDetailItem houseDetailIcon={<CarGarageIcon/>} houseDetailText={"1 Carport"}/>
                <HouseDetailItem houseDetailIcon={<StairsIcon/>} houseDetailText={"2 Floors"}/>
            </ul>
            <div className="separator-line"></div>
        </HouseDetailWrapper>
    )
}