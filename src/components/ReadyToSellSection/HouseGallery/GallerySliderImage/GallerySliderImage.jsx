import * as basicLightbox from 'basiclightbox'




export const GallerySliderImage = ({ image, width, height }) => {

    const openModalWithImg = () => {
        if (!image) {
            return
        }

        const instance = basicLightbox.create(`<img src=${image} alt="Image">`)
        instance.show()

    };

    return (
        <div
            onClick={openModalWithImg}
            style={
                {
                    cursor: "zoom-in",
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    borderRadius:"4px",
                    width,
                    height,
                }
            }
            aria-label="slider image">
        </div>
    )
}