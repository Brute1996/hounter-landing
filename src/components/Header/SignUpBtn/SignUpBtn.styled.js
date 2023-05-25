import styled from "@emotion/styled";

export const SignUpBtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #d1fae5;
  border-radius: 32px;
  border: none;
  padding: 12px 24px;

  max-width: 108px;

  color: #047857;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.57;

  transition: scale 100ms ease-in-out;

  &:hover,
  &:focus {
    scale: 1.1;
    outline: 3px dashed #047857;
  }

  &:active {
    scale: 0.9;
  }
`;
