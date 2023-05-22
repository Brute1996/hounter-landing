import { Container } from "../common/Container/Container";
import { SectionSlogan } from "../common/SectionSlogan/SectionSlogan"
import { SectionTitle } from "../common/SectionTitle/SectionTitle"
import { OurReviewSectionWrapper } from "./OurReviewSection.styled"
import { OurReviewSlider } from "./OurReviewSlider/OurReviewSlider";

export const OurReviewSection = () => {
    return (
        <OurReviewSectionWrapper>
            <Container>
                <SectionTitle>See Our Review</SectionTitle>
                <SectionSlogan>What Our User Say About Us</SectionSlogan>
                <OurReviewSlider />
            </Container>
        </OurReviewSectionWrapper>
        
    )
};