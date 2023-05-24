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
    font-size: 14px;

    color: #0e1735;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  .manager-info-wrapper {
    margin-right: 5px;
    @media (min-width: 450px) {
      margin-right: 20px;
    }
    @media (min-width: 768px) {
      margin-right: 57px;
    }
  }

  .manager-position {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.58;

    color: #888b97;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  .primary-button {
    gap: 4px;

    @media (min-width: 768px) {
      gap: 16px;
    }
  }
`;
