import styled from "@emotion/styled";

export const LogoWrapper = styled.a`
  display: flex;
  gap: 16px;

  .logo-image {
    position: relative;
    width: 32px;
    height: 32px;

    background: #f59e0b;
    border-radius: 4px 4px 24px 4px;
  }

  .logo-image::after {
    content: "";
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    top: 4px;
    left: 4px;

    background: #4be4c9;
    border-radius: 4px 4px 24px 4px;
  }

  .logo-text {
    color: #1b1c57;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    margin-top: 10px;
    margin-bottom: 6px;
  }
`;
