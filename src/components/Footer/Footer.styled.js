import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  margin-bottom: 120px;

  .container {
    display: flex;
    justify-content: space-between;
  }

  .social-media {
    .logo {
      margin-bottom: 16px;
    }

    &-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.71;
      color: #626687;
      opacity: 0.75;

      max-width: 320px;
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
    gap: 88px;
  }
`;
