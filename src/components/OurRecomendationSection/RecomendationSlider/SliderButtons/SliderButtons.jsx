import { SliderButtonsWrapper } from "./SliderButtons.styled"
import {ReactComponent as ArrowIcon} from "../../../common/icons/arrow.svg"
import { useEffect, useState } from "react";

export const SliderButtons = ({ swiperRef, filterButtonNameClicked }) => {

    const [onStart, setOnStart] = useState(false)
    const [onEnd, setOnEnd] = useState(false)
    

    const setSwiperPosition = () => {
        setOnStart(swiperRef.isBeginning)
        setOnEnd(swiperRef.isEnd)
    };

    useEffect(() => {
        if (!swiperRef) {
            return
        }

        setSwiperPosition()

    }, [swiperRef, filterButtonNameClicked]);

    const handlePrevClick = () => {
        swiperRef.slidePrev();

        setSwiperPosition()
    };
    
    const handleNextClick = () => {
        swiperRef.slideNext();

        setSwiperPosition()
    };


    return (
        <SliderButtonsWrapper>
            <button
                
                disabled={onStart ? true : false}
                onClick={handlePrevClick}
                className={`slider-btn prev-btn ${onStart ? null : "on-end"}`}
                type="button">
                <ArrowIcon className="icon" width={28} height={28} /></button>
            <button
                disabled={onEnd ? true : false}
                onClick={handleNextClick}
                className={`slider-btn next-btn ${onEnd ? null : "on-start"}`}
                type="button">
                <ArrowIcon className="icon" width={28} height={28} /></button>
        </SliderButtonsWrapper>
    )
};