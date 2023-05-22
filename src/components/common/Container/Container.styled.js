import styled from "@emotion/styled";

export const ContainerStyle = styled.div`
  /* outline: 1px solid red; */
  margin: 0 auto;
  overflow-x: hidden;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 1440px;
  }

  @media (min-width: 1200px) {
    padding: 0 120px;
  }
`;
