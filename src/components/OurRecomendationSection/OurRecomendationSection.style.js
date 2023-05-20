import styled from "@emotion/styled";

export const OurRecomendationSectionStyle = styled.section`
  .container {
    padding: 0 30px;

    @media (min-width: 1200px) {
    }
    @media (min-width: 1350px) {
      padding-left: 160px;
      padding-right: 0;
    }
  }

  .section-title {
    text-align: center;
    @media (min-width: 764px) {
      text-align: start;
    }
  }

  .section-top-side {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    margin-bottom: 40px;

    @media (min-width: 764px) {
      align-items: flex-start;
      justify-content: space-around;
      flex-direction: row;
    }

    @media (min-width: 1200px) {
      align-items: center;
      justify-content: flex-start;
      gap: 137px;
    }
  }

  .slider-manipulate {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    @media (min-width: 1200px) {
      flex-direction: row;
      gap: 137px;
    }
  }
`;
