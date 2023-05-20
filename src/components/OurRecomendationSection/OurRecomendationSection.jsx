import React, { useEffect, useState } from "react";
import { FilterButtonList } from "./FilterButtonList/FilterButtonList";
import { OurRecomendationSectionStyle } from "./OurRecomendationSection.style"
import { RecomendationSlider } from "./RecomendationSlider/RecomendationSlider";
import { Container } from "../common/Container/Container";
import { SectionTitle } from "../common/SectionTitle/SectionTitle";
import { SliderButtons } from "./RecomendationSlider/SliderButtons/SliderButtons";

export const RecomendationSectionConext = React.createContext()

export const OurRecomendationSection = () => {
    const [filterButtonNameClicked, setFilterButtonNameClicked] = useState("House");
    const [swiperRef, setSwiperRef] = useState(null);
    const [slideChaged, setSlideChanged] = useState(null)


    return (
        <OurRecomendationSectionStyle>
            <Container>
                <div className="section-top-side">
                    <SectionTitle>Featured House</SectionTitle>
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
            </Container>
        </OurRecomendationSectionStyle>
    )
};