import styled from "@emotion/styled";

export const FilterButtonListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 764px) {
    flex-direction: row;
    align-items: normal;
  }
`;
