import { PlayerStartIcon } from "../../../icons"
import { GallerySlider } from "./GallerySlider/GallerySlider"


import { HouseGalleryWrapper } from "./HouseGallery.styled"

import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';

export const HouseGallery = () => {
    
    const handleVideoClick = () => {
        const instance = basicLightbox.create(`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Hq3O0Es6RdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)

        instance.show()
    }

    return (
        <HouseGalleryWrapper>
            <div
                onClick={handleVideoClick}
                className="video-preview"
                aria-label="video preview image">
                <button className="player-btn" type="button"><PlayerStartIcon /></button>
            </div>
            <GallerySlider />
        </HouseGalleryWrapper>
    )
};