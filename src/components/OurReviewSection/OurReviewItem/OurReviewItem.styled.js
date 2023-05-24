import styled from "@emotion/styled";

export const OurReviewItemWrapper = styled.div`
  position: relative;
  display: inline-block;
  min-height: 450px;

  @media (min-width: 768px) {
    min-height: 505px;
  }

  .item-image {
    width: 300px;
    height: 200px;
    opacity: 0.7;
    border-radius: 8px;

    @media (min-width: 768px) {
      width: 740px;
      height: 400px;
    }
  }

  .item-comment {
    position: absolute;
    top: 130px;
    left: 20px;
    right: 20px;
    background: #ffffff;
    box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
    border-radius: 16px;
    padding: 20px;

    @media (min-width: 768px) {
      top: 256px;
      left: 64px;
      right: 64px;
      padding: 32px;
    }
  }

  .comment-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;
    text-transform: capitalize;

    color: #1b1c57;

    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  .comment-text {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.71;
    color: #626687;

    opacity: 0.75;

    margin-bottom: 24px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  .manager-info-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .manager-info {
    display: flex;
    align-items: center;
    gap: 8px;

    @media (min-width: 768px) {
      gap: 24px;
    }
  }

  .manager-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .manager-name {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.57;

    color: #0e1735;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  .manager-position {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.57;

    color: #888b97;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  .manager-score {
    display: flex;
    align-items: flex-end;

    font-weight: 600;
    font-size: 16px;
    line-height: 1.4;

    color: #3c4563;

    @media (min-width: 768px) {
      font-size: 20px;
      gap: 16px;
    }
  }
`;
