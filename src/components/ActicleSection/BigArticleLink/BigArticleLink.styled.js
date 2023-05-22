import styled from "@emotion/styled";

export const BigArticleLinkWrapper = styled.div`
  margin-top: 2px;
  max-width: 560px;

  .article-image {
    width: 560px;
    height: 280px;
    border-radius: 16px;

    margin-bottom: 24px;
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
