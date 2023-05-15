import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  background-color: transparent;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttons-wrapper {
    display: flex;
    gap: 56px;
  }

  .header-link-list {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .header-link {
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
  }

  .sign-up-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #d1fae5;
    border-radius: 32px;
    border: none;
    padding: 12px 24px;

    color: #047857;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.57;
  }
`;
