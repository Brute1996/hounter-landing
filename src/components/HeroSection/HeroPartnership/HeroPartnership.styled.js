import styled from "@emotion/styled";

export const HeroPartnershipWrapper = styled.div`
  .partnership-title {
    font-weight: 400;
    font-size: 16px;
    line-height: 2;
    text-align: center;
    color: #888b97;

    @media (min-width: 1200px) {
      text-align: start;
    }
  }

  .partnership-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 32px;

    @media (min-width: 1200px) {
      justify-content: flex-start;
    }
  }
`;
