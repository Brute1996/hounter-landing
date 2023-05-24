import styled from "@emotion/styled";

export const ArticleLinkListWrapper = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;
