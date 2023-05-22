import { avatar8 } from "../../common/images"
import { Call } from "../icons"
import { ManagerContactNowWrapper } from "./ManagerContactNow.styled"

export const UserContactNow = () => {
    return(
        <ManagerContactNowWrapper>
            <img className="manager-avatar" src={avatar8} alt="Sarah Adams avatar" />
            <div className="manager-info-wrapper">
                <p className="manager-name" aria-label="manager name">Sarah Adams</p>
                <p className="manager-position" aria-label="position" >Manager Director</p>
            </div>
            <a className="contact-now-ref" href="tel:+1234567890"><Call/>Contact Now</a>
        </ManagerContactNowWrapper>
    )
}