import styled from "@emotion/styled";

export const ContainerStyle = styled.div`
  /* outline: 1px solid red; */
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 768px) {
    padding: 0 30px;
    width: 100%;
    max-width: 1440px;
  }

  @media (min-width: 1200px) {
    padding: 0 120px;
  }
`;
