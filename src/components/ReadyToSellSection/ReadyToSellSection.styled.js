import styled from "@emotion/styled";

export const ReadyToSellSectionWrapper = styled.section`
  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media (min-width: 1200px) {
      flex-direction: row;
      padding-right: 0;
      align-items: normal;
      gap: 0;
    }
  }

  .section-left-side {
    width: 100%;
    @media (min-width: 1200px) {
      width: auto;
    }
  }

  .house-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
      align-items: normal;
      max-width: 524px;
      padding-left: 40px;
    }
  }

  .section-title {
    @media (min-width: 1200px) {
      margin-top: 28px;
    }
  }

  .section-slogan {
    margin-bottom: 16px;
  }

  .section-text {
    margin-bottom: 16px;
    @media (min-width: 1200px) {
      max-width: 400px;
    }
  }
`;
