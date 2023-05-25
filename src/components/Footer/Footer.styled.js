import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 36px;
    justify-content: space-between;
    padding-bottom: 120px;

    @media (min-width: 768px) {
      gap: 14px;
      flex-direction: row;
    }

    @media (min-width: 1440px) {
      justify-content: space-around;
    }
  }

  .social-media {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      align-items: normal;
    }

    .logo {
      margin-bottom: 16px;
    }

    &-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.71;
      color: #626687;
      opacity: 0.75;

      text-align: center;

      @media (min-width: 768px) {
        text-align: start;
        max-width: 320px;
      }

      margin-bottom: 24px;
    }

    &-icon {
      path {
        transition: scale 200ms ease-in-out, fill 200ms ease-in-out;
      }
    }

    &-list {
      display: flex;
      align-items: center;
      gap: 24px;

      li {
        &:hover .social-media-icon,
        &:focus .social-media-icon {
          path {
            scale: 1.05;
            fill: #10b981;
          }
        }
      }
    }
  }

  .footer-links {
    display: flex;
    gap: 15px;
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: flex-start;
      gap: 30px;
    }

    @media (min-width: 1200px) {
      gap: 88px;
    }
  }

  .gradient-bg {
    width: 100%;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 0;

    z-index: -999;
    background-image: radial-gradient(
      circle,
      #82bbff,
      rgba(255, 255, 255, 0) 35%
    );
    background-repeat: no-repeat;
    background-position: 150px 375px;
    opacity: 0.5;

    @media (min-width: 768px) {
      background-position: 400px 375px;
    }

    @media (min-width: 1200px) {
      background-position: 550px 375px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
        circle,
        #b9ff82,
        rgba(255, 255, 255, 0) 35%
      );
      background-repeat: no-repeat;
      background-position: 100px 440px;

      @media (min-width: 768px) {
        background-position: 200px 440px;
      }

      @media (min-width: 1200px) {
        background-position: 400px 440px;
      }
    }
  }
`;
