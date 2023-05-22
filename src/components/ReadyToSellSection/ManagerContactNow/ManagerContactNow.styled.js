import styled from "@emotion/styled";

export const ManagerContactNowWrapper = styled.div`
  display: flex;
  align-items: center;

  .manager-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;

    margin-right: 24px;
  }

  .manager-name {
    font-weight: 500;
    font-size: 1.33;
    line-height: 24px;

    color: #0e1735;
  }

  .manager-info-wrapper {
    margin-right: 57px;
  }

  .manager-position {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.58;

    color: #888b97;
  }

  .contact-now-ref {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.57;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    background: #10b981;
    border-radius: 32px;
    padding: 12px 16px;
  }
`;
