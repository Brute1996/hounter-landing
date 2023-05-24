import styled from "@emotion/styled";

export const ArticleLinkWrapper = styled.li`
  max-width: 200px;

  @media (min-width: 768px) {
    max-width: 100%;
  }

  a {
    display: flex;
    gap: 12px;
    flex-direction: column;

    @media (min-width: 900px) {
      flex-direction: row;
    }

    @media (min-width: 1200px) {
      gap: 32px;
    }

    @media (min-width: 1440px) {
      align-items: center;
    }
  }

  .article-image {
    width: 200px;
    height: 144px;
    border-radius: 16px;
  }

  .article-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.77;
    color: #1b1c57;

    text-transform: capitalize;

    margin-bottom: 16px;

    @media (min-width: 1200px) {
      font-size: 18px;
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
`;
