import styled from "@emotion/styled";

export const BigArticleLinkWrapper = styled.div`
  margin-top: 2px;
  max-width: 560px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      align-items: normal;
    }
  }

  &:hover .time-to-read,
  &:focus .time-to-read {
    svg {
      path {
        fill: #10b981;
      }
    }
    color: #10b981;
  }

  .article-image {
    width: 300px;
    height: 180px;
    border-radius: 16px;

    margin-bottom: 24px;

    @media (min-width: 768px) {
      width: 460px;
      height: 280px;
    }

    @media (min-width: 1200px) {
      width: 100%;
      height: 280px;
    }
  }

  .article-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33;

    text-transform: capitalize;
    color: #1b1c57;

    margin-bottom: 12px;
  }

  .article-short-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.71;

    color: #626687;
    opacity: 0.75;

    margin-bottom: 16px;
  }
`;
