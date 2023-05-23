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

    &-list {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }

  .footer-links {
    display: flex;
    gap: 88px;
  }
`;
