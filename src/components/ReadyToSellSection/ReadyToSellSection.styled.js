import styled from "@emotion/styled";

export const ReadyToSellSectionWrapper = styled.section`
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media (min-width: 1200px) {
      flex-direction: row;
      align-items: normal;
      gap: 0;
    }

    @media (min-width: 1440px) {
      justify-content: space-around;
    }
  }

  .section-left-side {
    width: 100%;
    @media (min-width: 1200px) {
      width: auto;
    }
  }

  .house-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
      align-items: normal;
      max-width: 524px;
      padding-left: 40px;
    }
  }

  .section-title {
    @media (min-width: 1200px) {
      margin-top: 28px;
    }
  }

  .section-slogan {
    margin-bottom: 16px;
  }

  .section-text {
    margin-bottom: 16px;

    @media (min-width: 1200px) {
      max-width: 400px;
    }
  }

  .gradient-bg {
    width: 100%;
    height: 1000px;
    position: absolute;
    top: -400px;
    right: 0;

    z-index: -999;
    background-image: radial-gradient(
      circle,
      #ff9882,
      rgba(255, 255, 255, 0) 30%
    );
    background-repeat: no-repeat;
    background-position: -140px 355px;
    opacity: 0.5;

    @media (min-width: 1200px) {
      background-position: 540px -45px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
        circle,
        #fffa82,
        rgba(255, 255, 255, 0) 30%
      );
      background-repeat: no-repeat;
      background-position: 50px 330px;

      @media (min-width: 1200px) {
        background-position: 540px 60px;
      }
    }
  }
`;
