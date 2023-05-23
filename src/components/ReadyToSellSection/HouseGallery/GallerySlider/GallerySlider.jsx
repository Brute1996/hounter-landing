import { Swiper, SwiperSlide } from 'swiper/react';

import { readyToSellImg1, readyToSellImg2, readyToSellImg3, readyToSellImg4, readyToSellImg5, readyToSellImg6, readyToSellImg7, readyToSellImg8 } from "../../../../images"
import { GallerySliderImage } from "../GallerySliderImage/GallerySliderImage"
import { GallerySliderWrapper } from './GallerySlider.styled';
import { Autoplay } from 'swiper';
import { useRef } from 'react';

export const GallerySlider = () => {
    const gallerySwiperRef = useRef(null);

    const handleMouseEnter = () => {
        gallerySwiperRef.current.swiper.autoplay.stop();
    };

    const handleMouseLeave = () => {
        gallerySwiperRef.current.swiper.autoplay.start();
    };




    return (
        <GallerySliderWrapper
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Swiper
                ref={gallerySwiperRef}
                slidesPerView="auto"
                loop={true}
                spaceBetween={12}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={2500}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <GallerySliderImage
                        image={readyToSellImg1}
                        width="296px"
                        height="168px"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <GallerySliderImage
                        image={readyToSellImg2}
                        width="96px"
                        height="80px"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <GallerySliderImage
                        image={readyToSellImg3}
                        width="96px"
                        height="80px"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <GallerySliderImage
                        image={readyToSellImg4}
                        width="196px"
                        height="135px"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <GallerySliderImage
                        image={readyToSellImg5}
                        width="122px"
                        height="112px"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <GallerySliderImage
                        image={readyToSellImg6}
                        width="96px"
                        height="80px"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <GallerySliderImage
                        image={readyToSellImg7}
                        width="144px"
                        height="97px"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <GallerySliderImage
                        image={readyToSellImg8}
                        width="100px"
                        height="90px"
                    />
                </SwiperSlide>
            </Swiper>
        </GallerySliderWrapper>
    )
};