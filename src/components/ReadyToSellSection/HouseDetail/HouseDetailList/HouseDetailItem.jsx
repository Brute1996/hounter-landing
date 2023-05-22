import { HouseDetailItemStyle } from "./HouseDetailItem.styled"

export const HouseDetailItem = ({houseDetailIcon, houseDetailText}) => {
    return (
        <HouseDetailItemStyle>
            {houseDetailIcon}
            <p>{houseDetailText}</p>
        </HouseDetailItemStyle>
    )
}