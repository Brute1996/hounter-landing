import styled from "@emotion/styled";

export const HouseDetailWrapper = styled.div`
  max-width: 440px;
  margin-bottom: 32px;

  .house-detail-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.75;
    text-align: center;
    color: #1b1c57;

    opacity: 0.75;

    margin-bottom: 16px;

    @media (min-width: 1200px) {
      text-align: start;
    }
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
