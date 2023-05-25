import styled from "@emotion/styled";

export const ScrollUpButtonStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #10b981;
  opacity: 0.7;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  .arrow-icon {
    width: 45px;
    height: 45px;
    transform: rotate(180deg);

    &:hover {
      animation: bounce 1500ms infinite;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0) rotate(180deg);
    }
    50% {
      transform: translateY(-5px) rotate(180deg);
    }
    100% {
      transform: translateY(0) rotate(180deg);
    }
  }
`;
