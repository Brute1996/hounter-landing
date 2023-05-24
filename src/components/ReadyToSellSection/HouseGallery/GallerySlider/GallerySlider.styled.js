import styled from "@emotion/styled";

export const GallerySliderWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 130px;

  @media (min-width: 768px) {
    top: 291px;
  }

  .swiper-wrapper {
    display: flex;
    align-items: flex-end;
  }

  .swiper-slide {
    width: auto;
    display: inline-flex;
  }
`;
