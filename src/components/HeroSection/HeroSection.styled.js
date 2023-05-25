import styled from "@emotion/styled";
import { heroBgImage } from "../../images";

export const HeroSectionStyle = styled.section`
  .container {
    position: relative;

    display: flex;
    flex-direction: column-reverse;

    align-items: center;
    padding-left: 0;
    padding-right: 0;

    @media (min-width: 1200px) {
      padding-left: 120px;
      align-items: normal;
      justify-content: space-between;
      flex-direction: row;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }

    .gradient-bg {
      width: 100%;
      height: 1000px;
      position: absolute;
      left: 0;
      top: 0;

      z-index: -999;
      background-image: radial-gradient(
        circle,
        #82ffd2,
        rgba(255, 255, 255, 0) 30%
      );
      background-repeat: no-repeat;
      background-position: -150px 250px;
      opacity: 0.5;

      @media (min-width: 768px) {
        background-position: -350px 250px;
      }

      @media (min-width: 1200px) {
        background-position: -450px -400px;
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(
          circle,
          #82f7ff,
          rgba(255, 255, 255, 0) 30%
        );
        background-repeat: no-repeat;
        background-position: -320px 350px;

        @media (min-width: 768px) {
          background-position: -500px 300px;
        }

        @media (min-width: 1200px) {
          background-position: -700px -320px;
        }
      }
    }
  }

  .left-side {
    margin-top: 30px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 496px;

    @media (min-width: 768px) {
      padding: 0 30px;
      margin-top: 50px;
      flex-direction: row;
      align-items: normal;
      justify-content: flex-start;
      max-width: 100%;
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
    overflow: hidden;
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
      max-width: 720px;
      border-radius: 0px 0px 0px 80px;
    }
  }
`;
