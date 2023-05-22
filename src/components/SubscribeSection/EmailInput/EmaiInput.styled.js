import styled from "@emotion/styled";

export const EmaiInputWrapper = styled.div`
  display: flex;
  justify-content: center;

  form {
    label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border-radius: 32px;
      background-color: #fff;
      padding: 4px;

      transition: border 0.5s ease-in-out;

      @media (min-width: 768px) {
        gap: 16px;
        padding: 4px 4px 4px 24px;
      }
    }

    input {
      font-weight: 500;
      font-size: 12px;
      line-height: 1.57;
      color: #888b97;
      padding: 0;
      border: none;

      background-color: transparent;

      @media (min-width: 768px) {
        font-size: 14px;
      }

      @media (min-width: 1200px) {
        width: 283px;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      z-index: 2;

      background: #10b981;
      border-radius: 32px;
      border: none;
      padding: 8px 8px;

      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.57;
      color: #fff;

      @media (min-width: 768px) {
        padding: 13px 16px;
      }
    }
  }
`;
