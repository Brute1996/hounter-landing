import styled from "@emotion/styled";

export const ArticleAtuhorStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 12px;

  .article-author-avatar {
    width: 32px;
    height: 32px;
    filter: drop-shadow(0px 9px 32px rgba(89, 92, 219, 0.1));
    border-radius: 50%;
  }

  .article-author-name {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.57;

    color: #3c4563;

    @media (min-width: 1200px) {
      font-size: 14px;
    }
  }
`;
