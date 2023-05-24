import styled from "@emotion/styled";

export const PrimaryButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  font-size: 12px;
  background: #10b981;
  border-radius: 32px;
  border: none;
  padding: 8px 8px;

  font-style: normal;
  font-weight: 600;

  line-height: 1.57;
  color: #fff;

  transition: scale 100ms ease-in-out;

  &:hover,
  &:focus {
    scale: 1.05;
  }

  &:active {
    scale: 0.85;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    padding: 13px 16px;
  }
`;
