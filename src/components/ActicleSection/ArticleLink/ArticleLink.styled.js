import styled from "@emotion/styled";

export const ArticleLinkWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 32px;

  .article-image {
    width: 200px;
    height: 144px;
    border-radius: 16px;
  }

  .article-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.77;
    color: #1b1c57;

    text-transform: capitalize;

    margin-bottom: 16px;
  }
`;
