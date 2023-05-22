import styled from "@emotion/styled";

export const HeroTitleWrapper = styled.div`
  @media (min-width: 768px) {
    max-width: 50%;
  }

  @media (min-width: 1200px) {
    max-width: 100%;
  }

  .hero-title {
    color: #1b1c57;
    font-weight: 600;
    font-size: 40px;
    line-height: 1.25;
    text-transform: capitalize;
    -webkit-text-stroke: 1px #1b1c57;
    margin-bottom: 24px;
    text-align: center;

    @media (min-width: 1200px) {
      text-align: start;
      width: 75%;
    }

    span {
      -webkit-text-fill-color: transparent;
    }
  }

  .section-text {
    margin-bottom: 32px;
  }
`;
