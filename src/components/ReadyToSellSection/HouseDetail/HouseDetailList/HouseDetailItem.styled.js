import styled from "@emotion/styled";

export const HouseDetailItemStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  width: calc(100% / 2);

  font-weight: 500;
  font-size: 14px;
  line-height: 1.25;

  text-transform: capitalize;

  color: #3c4563;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
