import { RecomendationSliderWrapper } from "./RecomendationSlider.styled"
import { SlideItem } from "./SlideItem/SlideItem"
import { Swiper, SwiperSlide } from 'swiper/react';

import adCardsArr from "./adCards"

import 'swiper/css';
import { useEffect, useRef } from "react";

export const RecomendationSlider = ({filterButtonNameClicked, setSwiperRef, setSlideChanged}) => {

    const swiperRef = useRef(null);

    useEffect(() => {
        if (!swiperRef) {
            return
        }
        setSwiperRef(swiperRef.current.swiper)
    
    },[setSwiperRef, swiperRef])

    const filteredSlides = () => {
        return adCardsArr.filter(({ filterType }) => {
            return filterType === filterButtonNameClicked
        })
    };


    return (
        <RecomendationSliderWrapper>
            <Swiper
                  onSlideChange={(swiper) => setSlideChanged(swiper.activeIndex)}
                spaceBetween={40}
                ref={swiperRef}
                breakpoints={{
                    320: {
                        slidesPerView:1
                    },
                    400: {
                        slidesPerView:1.3
                    },
                    580: {
                        slidesPerView:2
                    },
                                        764:{
                slidesPerView:"auto",
                    }
                }}
            >
                {filteredSlides().map(
                    ({ filterType,
                        image,
                        labelType,
                        title,
                        price,
                        sellerAvatar,
                        sellerName,
                        sellerLocation
                    }, index) => {
                        return <SwiperSlide key={index}>
                            <SlideItem
                                filterType={filterType}
                                image={image}
                                labelType={labelType}
                                title={title}
                                price={price}
                                sellerAvatar={sellerAvatar}
                                sellerName={sellerName}
                                sellerLocation={sellerLocation}
                            />
                        </SwiperSlide>
                    }
                )}
            </Swiper>
        </RecomendationSliderWrapper>
    )
};
