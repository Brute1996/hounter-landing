import styled from "@emotion/styled";

export const SlideItemWrapper = styled.div`
  max-width: 340px;

  .image-wrapper {
    position: relative;
    margin-bottom: 24px;

    img {
      width: 340px;
      height: 382px;
      border-radius: 24px;
    }
  }

  .label {
    position: absolute;
    bottom: 16px;
    left: 16px;

    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 10px;

    border-radius: 32px;
    padding: 8px 16px;

    font-weight: 500;
    font-size: 14px;
    line-height: 1.28;

    text-transform: capitalize;

    &.popular {
      background: #fee2e2;
      color: #ef4444;
    }

    &.new-house {
      background: #dbeafe;
      color: #1d4ed8;
    }

    &.best-deals {
      color: #047857;
      background: #d1fae5;
    }
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33;

    color: #0e1735;

    margin-bottom: 8px;
  }

  .price {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.6;

    color: #3c4563;

    margin-bottom: 24px;
  }

  .seller-wrapper {
    display: flex;
    gap: 16px;
  }

  .seller-avatar {
    width: 40px;
    height: 40px;

    border-radius: 50%;
  }

  .seller-name {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;

    color: #0e1735;
  }

  .seller-location {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.57;

    color: #888b97;
  }
`;
