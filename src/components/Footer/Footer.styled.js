import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  margin-bottom: 120px;

  .container {
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
`;
