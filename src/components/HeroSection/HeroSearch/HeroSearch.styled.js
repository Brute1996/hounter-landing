import styled from "@emotion/styled";

export const HeroSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  form {
    label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid #e0e3eb;
      border-radius: 32px;
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
        width: 255px;
      }
      @media (min-width: 1250px) {
        width: 303px;
      }

      &:focus {
        outline: none;
      }
    }

    .primary-button {
      .arrow-icon {
        width: 24px;
        height: 24px;
        rotate: -90deg;
      }
    }
  }
`;
