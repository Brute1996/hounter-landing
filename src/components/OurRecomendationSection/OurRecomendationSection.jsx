import React, { useState } from "react";
import { FilterButtonList } from "./FilterButtonList/FilterButtonList";
import { OurRecomendationSectionStyle } from "./OurRecomendationSection.style"
import { RecomendationSlider } from "./RecomendationSlider/RecomendationSlider";
import { Container } from "../common/Container/Container";
import { SectionSlogan } from "../common/SectionSlogan/SectionSlogan";
import { SliderButtons } from "./RecomendationSlider/SliderButtons/SliderButtons";
import { SectionTitle } from "../common/SectionTitle/SectionTitle";


export const RecomendationSectionConext = React.createContext()

export const OurRecomendationSection = () => {
    const [filterButtonNameClicked, setFilterButtonNameClicked] = useState("House");
    const [swiperRef, setSwiperRef] = useState(null);
    const [slideChaged, setSlideChanged] = useState(null)


    return (
        <OurRecomendationSectionStyle>
            <Container>
                <SectionTitle>Our Recommendation</SectionTitle>
                <div className="section-content-wrapper">
                    <div className="section-top-side">
                        <SectionSlogan>Featured House</SectionSlogan>
                        <div className="slider-manipulate">
                            <FilterButtonList
                                setFilterButtonNameClicked={setFilterButtonNameClicked} filterButtonNameClicked={filterButtonNameClicked}
                            />
                            <SliderButtons
                                slideChaged={slideChaged}
                                swiperRef={swiperRef}
                                filterButtonNameClicked={filterButtonNameClicked}
                            />
                        </div>
                    </div>
                    <RecomendationSlider
                        filterButtonNameClicked={filterButtonNameClicked}
                        setSwiperRef={setSwiperRef}
                        setSlideChanged={setSlideChanged}
                    />
                </div>
            </Container>
        </OurRecomendationSectionStyle>
    )
};