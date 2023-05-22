import { SectionSlogan } from "../common/SectionSlogan/SectionSlogan"
import { SectionText } from "../common/SectionText/SectionText"
import { SectionTitle } from "../common/SectionTitle/SectionTitle"
import { HouseDetail } from "./HouseDetail/HouseDetail"
import { UserContactNow } from "./ManagerContactNow/ManagerContactNow"
import { ReadyToSellSectionWrapper } from "./ReadyToSellSection.styled"

export const ReadyToSellSection = () => {
    return (
        <ReadyToSellSectionWrapper>
            <div className="left-side">
                <SectionTitle>Ready to Sell!</SectionTitle>
                <SectionSlogan>Let’s tour and see our house!</SectionSlogan>
                <SectionText>Houses recommended by our partners that have been curated to become the home of your dreams!</SectionText>
                <HouseDetail />
                <UserContactNow/>
            </div>
        </ReadyToSellSectionWrapper>
    )
};