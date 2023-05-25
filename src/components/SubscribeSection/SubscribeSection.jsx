import { Container } from "../common/Container/Container"
import { SectionSlogan } from "../common/SectionSlogan/SectionSlogan"
import { EmailInput } from "./EmailInput/EmailInput";
import { SubBgImages } from "./SubBgImages/SubBgImages";
import { SubscribeSectionWrapper } from "./SubscribeSection.styled"

export const SubscribeSection = () => {
    return (
        <SubscribeSectionWrapper>
            <Container>
                <SubBgImages />
                <div className="section-content">
                    <SectionSlogan>
                        Subscribe For More Info and update from Hounter
                    </SectionSlogan>
                    <EmailInput />
                </div>
            </Container>
        </SubscribeSectionWrapper>
    )
};