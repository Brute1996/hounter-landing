import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  margin-bottom: 120px;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 36px;
    justify-content: space-between;

    @media (min-width: 768px) {
      gap: 14px;
      flex-direction: row;
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
    width: 600px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    z-index: -999;
    background-image: radial-gradient(
      circle,
      #82ffe8,
      rgba(255, 255, 255, 0) 50%
    );
    background-repeat: no-repeat;
    background-position: -40px -75px;
    opacity: 0.5;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
        circle,
        #c8ff82,
        rgba(255, 255, 255, 0) 55%
      );
      background-repeat: no-repeat;
      background-position: -30px 140px;
    }
  }
`;
