import { avatar1, avatar15, avatar16, ourRev1Img, ourRev2Img, ourRev3Img } from "../../../images"
import { OurReviewItem } from "../OurReviewItem/OurReviewItem"
import { Swiper, SwiperSlide } from "swiper/react";
import { OurReviewSliderWrapper } from "./OurReviewSlider.styled";
import { Pagination } from "swiper";

import "swiper/css/pagination";

export const OurReviewSlider = () => {
    return (
        <OurReviewSliderWrapper>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                spaceBetween={56}
                slidesPerView="auto"
                initialSlide={1}
                centeredSlides={true}
            >

                <SwiperSlide >
                    <OurReviewItem
                        itemImage={ourRev2Img}
                        commentTitle="My house sold out fast!"
                        commentText="I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!"
                        managerAvatar={avatar15}
                        managerName="Courtney Henry"
                        managerPosition="CEO Andarafish"
                        managerScore="4.3"
                    />
                </SwiperSlide>

                <SwiperSlide >
                    <OurReviewItem
                        itemImage={ourRev1Img}
                        commentTitle="Best! I got the house I wanted through Hounter"
                        commentText="Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want."
                        managerAvatar={avatar1}
                        managerName="Dianne Russell"
                        managerPosition="Manager Director"
                        managerScore="4.6"
                    />
                </SwiperSlide>
                        
                <SwiperSlide >
                    <OurReviewItem
                        itemImage={ourRev3Img}
                        commentTitle="Through the Hounter, I can get a house for my self"
                        commentText="By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!"
                        managerAvatar={avatar16}
                        managerName="Esther Howard"
                        managerPosition="Head of Marketing"
                        managerScore="4.6"
                    />
                </SwiperSlide>

            </Swiper>
        </OurReviewSliderWrapper>
        
    )
};