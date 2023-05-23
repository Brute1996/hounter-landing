import styled from "@emotion/styled";
import { heroBgImage } from "../../images";

export const HeroSectionStyle = styled.section`
  .container {
    position: relative;

    display: flex;
    flex-direction: column-reverse;

    align-items: center;
    padding-right: 0;

    @media (min-width: 1200px) {
      align-items: normal;
      gap: 104px;
      flex-direction: row;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }

    .gradient-bg {
      width: 541px;
      height: 523px;
      position: absolute;
      left: -150px;
      top: 45%;

      z-index: -999;
      background-image: radial-gradient(
        circle,
        #82ffd2,
        rgba(255, 255, 255, 0) 50%
      );
      background-repeat: no-repeat;
      background-position: 100px -30px;
      opacity: 0.5;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(
          circle,
          #82f7ff,
          rgba(255, 255, 255, 0) 50%
        );
        background-repeat: no-repeat;
        background-position: -100px 0;
      }

      @media (min-width: 768px) {
        width: 741px;
        height: 523px;
        left: -35%;
        top: 50%;
      }

      @media (min-width: 1200px) {
        left: -10%;
        top: -20%;
      }
    }
  }

  .left-side {
    margin-top: 30px;
    padding: 0 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 496px;

    @media (min-width: 768px) {
      margin-top: 50px;
      padding: 0;
      flex-direction: row;
      align-items: normal;
      justify-content: flex-start;
      max-width: 100%;
      padding: 0 30px;
      gap: 50px;
    }

    @media (min-width: 1200px) {
      flex-direction: column;
      margin-top: 182px;
      max-width: 496px;
      padding: 0;
      gap: 0;
    }
  }

  .right-side {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 720px;

    padding: 0 10% 30px;

    background-image: linear-gradient(
        16.74deg,
        #0c1537 -6.09%,
        rgba(12, 21, 55, 0) 32.63%
      ),
      url(${heroBgImage});
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 0px 0px 40px 40px;

    @media (min-width: 1200px) {
      padding: 0 0 38px 48px;

      width: 720px;
      height: 720px;
      border-radius: 0px 0px 0px 80px;
    }
  }
`;
