import React, { useState } from "react";
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

    return (
        <OurRecomendationSectionStyle>
            <Container>
                <div className="section-top-side">
                    <SectionTitle>Featured House</SectionTitle>
                    <FilterButtonList
                        setFilterButtonNameClicked={setFilterButtonNameClicked} filterButtonNameClicked={filterButtonNameClicked}
                    />
                    <SliderButtons
                        swiperRef={swiperRef}
                        filterButtonNameClicked={filterButtonNameClicked}
                    
                    />
                </div>
                <RecomendationSlider
                    filterButtonNameClicked={filterButtonNameClicked}
                    setSwiperRef={setSwiperRef}
                />
            </Container>
        </OurRecomendationSectionStyle>
    )
};