import { SloganListStyle } from "./SloganList.styled"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";

export const SloganList = () => {
    


    return (
        <SloganListStyle>
            <Swiper
                spaceBetween={16}
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1500}
                breakpoints={{
                     320: {
                        slidesPerView: 1,
                    },
                    510: {
                        slidesPerView: 1.4,
                         centeredSlides: true
                    },
                    768: {
                         centeredSlides: false,
                        slidesPerView: "auto"
                    },
                }}
                    >
                <SwiperSlide><li className="slogan-item">
                    <ul className="avatar-list">
                        <li className="avatar-item"></li>
                        <li className="avatar-item"></li>
                        <li className="avatar-item"></li>
                    </ul>
                    <div><h3 className="slogan-title">1K+ People</h3>
                        <p className="slogan-text">Successfully Getting Home</p></div>
                </li></SwiperSlide>
                <SwiperSlide><li className="slogan-item">
                    <div className="house-pic"></div>
                    <div>
                        <h3 className="slogan-title">56 Houses</h3>
                        <p className="slogan-text">Sold Monthly</p>
                    </div>
                </li></SwiperSlide>
                <SwiperSlide><li className="slogan-item people-looking">
                    <div className="avatar-item"></div>
                    <div>
                        <h3 className="slogan-title">4K+</h3>
                        <p className="slogan-text">People Looking for New Homes</p>
                    </div>
                </li></SwiperSlide>
                <SwiperSlide><li className="slogan-item">
                    <ul className="avatar-list">
                        <li className="avatar-item"></li>
                        <li className="avatar-item"></li>
                        <li className="avatar-item"></li>
                    </ul>
                    <div><h3 className="slogan-title">1K+ People</h3>
                        <p className="slogan-text">Successfully Getting Home</p></div>
                </li></SwiperSlide>
                <SwiperSlide><li className="slogan-item">
                    <div className="house-pic"></div>
                    <div>
                        <h3 className="slogan-title">56 Houses</h3>
                        <p className="slogan-text">Sold Monthly</p>
                    </div>
                </li></SwiperSlide>
                <SwiperSlide><li className="slogan-item people-looking">
                    <div className="avatar-item"></div>
                    <div>
                        <h3 className="slogan-title">4K+</h3>
                        <p className="slogan-text">People Looking for New Homes</p>
                    </div>
                </li></SwiperSlide>
            </Swiper>
        </SloganListStyle>
        
    )
};