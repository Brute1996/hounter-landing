import styled from "@emotion/styled";

export const MenuLinkListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .link-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 32px;
    padding: 8px 16px;

    color: #f0f3fd;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28;

    transition: background-color 300ms ease-in-out;

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &.about-us {
      @media (min-width: 1200px) and (max-width: 1250px) {
        color: #1b1c57;
        border: 1px solid rgba(27, 28, 87, 0.5);
      }
    }
  }
`;
