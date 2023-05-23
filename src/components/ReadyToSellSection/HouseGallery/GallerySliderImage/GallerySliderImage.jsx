import * as basicLightbox from 'basiclightbox'
import { GallerySliderImageStyle } from './GallerySliderImage.styled';




export const GallerySliderImage = ({ image, width, height }) => {

    const openModalWithImg = () => {
        if (!image) {
            return
        }

        const instance = basicLightbox.create(`<img src=${image} alt="Image">`)
        instance.show()

    };

    return (
        <GallerySliderImageStyle
            onClick={openModalWithImg}
            style={
                {
                    backgroundImage: `url(${image})`,
                    width,
                    height,
                }
            }
            aria-label="slider image">
        </GallerySliderImageStyle>
    )
}