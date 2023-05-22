export const BgImage = ({ width, height, borderRadius, image, top, bottom, left, right }) => {
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top,
                    bottom,
                    left,
                    right,
                    width,
                    height,
                    border: "2px solid #FFF",
                    borderRadius,
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%"
                }}
            ></div>
        </>
    )
};