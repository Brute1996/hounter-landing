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
                {/* <div className="gradient-bg"></div> */}
                <div className="section-left-side">
                    <SectionTitle>Ready to Sell!</SectionTitle>
                    <div className="house-info">
                        <SectionSlogan>Let’s tour and see our house!</SectionSlogan>
                        <SectionText>Houses recommended by our partners that have been curated to become the home of your dreams!</SectionText>
                        <HouseDetail />
                        <UserContactNow />
                    </div>
                </div>

                <HouseGallery />
            </Container>
        </ReadyToSellSectionWrapper>
    )
};