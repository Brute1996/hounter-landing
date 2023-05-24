import { Call } from "../../../icons"
import { avatar1 } from "../../../images"
import { PrimaryButton } from "../../common/PrimaryButton/PrimaryButton"
import { ManagerContactNowWrapper } from "./ManagerContactNow.styled"

export const UserContactNow = () => {
    return(
        <ManagerContactNowWrapper>
            <img className="manager-avatar" src={avatar1} alt="Dianne Russell avatar" />
            <div className="manager-info-wrapper">
                <p className="manager-name" aria-label="manager name">Dianne Russell</p>
                <p className="manager-position" aria-label="position" >Manager Director</p>
            </div>
            <PrimaryButton linkHref="tel:+1234567890"><Call/>Contact Now</PrimaryButton>
        </ManagerContactNowWrapper>
    )
}