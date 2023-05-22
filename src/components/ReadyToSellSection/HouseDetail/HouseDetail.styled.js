import styled from "@emotion/styled";

export const HouseDetailWrapper = styled.div`
  max-width: 440px;
  margin-bottom: 32px;

  .house-detail-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.75;

    color: #1b1c57;

    opacity: 0.75;

    margin-bottom: 16px;
  }

  .house-detail-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 16px;
  }

  .separator-line {
    height: 2px;
    width: 100%;
    background: #f0f3fd;
    margin-top: 32px;
  }
`;
