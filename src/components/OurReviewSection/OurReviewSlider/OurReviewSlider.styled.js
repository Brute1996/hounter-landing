import styled from "@emotion/styled";

export const OurReviewSliderWrapper = styled.div`
  .swiper-slide {
    width: auto;
  }

  .swiper-pagination {
    position: static;
    margin-top: 32px;

    display: flex;
    justify-content: center;
    gap: 16px;

    &-bullet {
      width: 8px;
      height: 8px;
      opacity: 1;

      background: #e0e3eb;
    }

    &-bullet-active {
      background: #3c4563;
    }
  }

  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0;
  }
`;
