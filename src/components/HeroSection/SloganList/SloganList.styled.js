import styled from "@emotion/styled";
import houseImg from "../image/house.jpg";
import avatar4 from "../image/avatar4.jpg";
import { avatar1, avatar14, avatar16 } from "../../../images";

export const SloganListStyle = styled.ul`
  width: 100%;

  .swiper {
    border-radius: 32px;

    @media (min-width: 1200px) {
      border-radius: 32px 0 0 32px;
    }

    .swiper-slide {
      @media (min-width: 768px) {
        width: auto;
        max-width: 328px;
      }
    }
  }

  .slogan-item {
    display: flex;
    align-items: center;
    gap: 16px;

    padding: 24px;
    background: #fff;
    box-shadow: 0px 11px 48px rgba(51, 51, 51, 0.06);
    border-radius: 32px;
  }

  .slogan-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    color: #1b1c57;
  }

  .slogan-text {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.66;
    color: #68799f;
  }

  .avatar-item {
    width: 56px;
    height: 56px;

    border: 3px solid #ffffff;
    filter: drop-shadow(0px 9px 32px rgba(89, 92, 219, 0.1));
    border-radius: 50%;
  }

  .avatar-list {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 112px;
    min-height: 56px;

    .avatar-item {
      position: absolute;
      top: 0;
      left: 0;

      background-image: url(${avatar16});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;

      &:nth-of-type(n + 2) {
        transform: translateX(50%);

        background-image: url(${avatar14});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 5%;
      }

      &:nth-of-type(n + 3) {
        transform: translateX(100%);
        background-image: url(${avatar1});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 20%;
      }
    }
  }

  .house-pic {
    width: 56px;
    height: 56px;

    background-image: url(${houseImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

    border-radius: 24px;
  }

  .people-looking {
    .avatar-item {
      background-image: url(${avatar4});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
    }
  }
`;
