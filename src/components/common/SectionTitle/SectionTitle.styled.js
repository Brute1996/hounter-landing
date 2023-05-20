import styled from "@emotion/styled";

export const SectionTitleStyle = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  text-transform: capitalize;
  color: #f59e0b;
  margin-bottom: 12px;

  &::before {
    content: "";
    top: 50%;
    transform: translateY(-50%);
    left: -40px;

    display: block;
    height: 1px;
    width: 32px;
    background: #f59e0b;
  }
`;
