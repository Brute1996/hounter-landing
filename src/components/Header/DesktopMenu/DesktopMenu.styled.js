import styled from "@emotion/styled";

export const DesktopMenuStyle = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttons-wrapper {
    display: flex;
    gap: 56px;
  }
`;
