import styled from "@emotion/styled";

export const BurgerMenuStyle = styled.div`
  background-color: firebrick;
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);
  z-index: 999;
  overflow-y: scroll;

  transition: top 0.5s ease-in-out;

  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &.active {
    top: 68px;
  }

  .sign-up-btn {
    margin: 0 auto;
    margin-top: auto;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
