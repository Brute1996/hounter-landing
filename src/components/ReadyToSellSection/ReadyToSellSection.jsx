import { Container } from "../common/Container/Container"
import { SectionSlogan } from "../common/SectionSlogan/SectionSlogan"
import { SectionText } from "../common/SectionText/SectionText"
import { SectionTitle } from "../common/SectionTitle/SectionTitle"
import { HouseDetail } from "./HouseDetail/HouseDetail"
import { HouseGallery } from "./HouseGallery/HouseGallery"
import { UserContactNow } from "./ManagerContactNow/ManagerContactNow"
import { ReadyToSellSectionWrapper } from "./ReadyToSellSection.styled"

export const ReadyToSellSection = () => {
    return (
        <ReadyToSellSectionWrapper>
            <Container>
                <SectionTitle>Ready to Sell!</SectionTitle>
                <div className="section-content-wrapper">
                    <div className="left-side">
                        <SectionSlogan>Let’s tour and see our house!</SectionSlogan>
                        <SectionText>Houses recommended by our partners that have been curated to become the home of your dreams!</SectionText>
                        <HouseDetail />
                        <UserContactNow />
                    </div>
                    <HouseGallery/>
                </div>
                
            </Container>
        </ReadyToSellSectionWrapper>
    )
};