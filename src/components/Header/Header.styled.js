import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  @media (min-width: 768px) {
    background-color: transparent;

    .container {
      position: absolute;
      z-index: 9999;
      left: 50%;
      top: 40px;
      transform: translateX(-50%);
      overflow: visible;
    }
  }
`;
