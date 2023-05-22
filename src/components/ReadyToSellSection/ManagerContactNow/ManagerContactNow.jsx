import { Call } from "../../../icons"
import { avatar1 } from "../../../images"
import { ManagerContactNowWrapper } from "./ManagerContactNow.styled"

export const UserContactNow = () => {
    return(
        <ManagerContactNowWrapper>
            <img className="manager-avatar" src={avatar1} alt="Dianne Russell avatar" />
            <div className="manager-info-wrapper">
                <p className="manager-name" aria-label="manager name">Dianne Russell</p>
                <p className="manager-position" aria-label="position" >Manager Director</p>
            </div>
            <a className="contact-now-ref" href="tel:+1234567890"><Call/>Contact Now</a>
        </ManagerContactNowWrapper>
    )
}