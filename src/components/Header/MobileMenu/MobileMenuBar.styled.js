import styled from "@emotion/styled";

export const MobileMenuBarStyle = styled.nav`
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;

  padding: 16px;

  @media (min-width: 768px) {
    display: none;
  }

  .menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;
    font-size: 30px;
    color: #f0f3fd;
  }
`;
