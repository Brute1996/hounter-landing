import styled from "@emotion/styled";

export const MobileMenuBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(16, 185, 129, 0.95);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999999;

  padding: 10px 30px;

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
    color: #1b1c57;
  }
`;
