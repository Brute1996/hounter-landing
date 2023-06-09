import styled from "@emotion/styled";

export const ArticleTimeToReadStyle = styled.p`
  display: flex;
  gap: 12px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.71;

  color: #888b97;

  transition: color 300ms ease-in-out;

  svg {
    path {
      transition: fill 300ms ease-in-out;
    }
  }

  @media (min-width: 1200px) {
    font-size: 14px;
  }
`;
