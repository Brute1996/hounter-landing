import { AirbnbIcon, TiketComIcon, TravelokaIcon, TripadvisorIcon } from "../../../icons";
import { HeroPartnershipWrapper } from "./HeroPartnership.styled";


export const HeroPartnership = () => {
    return (
        <HeroPartnershipWrapper>
            <h3 className="partnership-title">Our Partnership</h3>
            <ul className="partnership-list">
                <li><TravelokaIcon /></li>
                <li><TiketComIcon /></li>
                <li><AirbnbIcon /></li>
                <li><TripadvisorIcon /></li>
                        
            </ul>
        </HeroPartnershipWrapper>
    )
};