import styled from "@emotion/styled";

export const FilterButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: 1px solid #e0e3eb;
  padding: 12px 24px;
  border-radius: 32px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.55;

  color: #888b97;

  transition: background-color 200ms ease-in-out;

  &:hover,
  &:focus {
    background-color: rgba(209, 250, 229, 0.6);
  }

  &.active {
    color: #10b981;
    background: #d1fae5;
    border: 1px solid transparent;

    .icon {
      path {
        fill: #10b981;
      }
    }
  }
`;
