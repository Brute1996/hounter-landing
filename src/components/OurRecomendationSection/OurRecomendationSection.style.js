import styled from "@emotion/styled";

export const OurRecomendationSectionStyle = styled.section`
  .container {
    padding-right: 0;

    .section-title {
      padding-left: 30px;
      @media (min-width: 1200px) {
        padding: 0;
      }
    }
  }
  .section-content-wrapper {
    padding-left: 30px;
    padding-right: 30px;

    @media (min-width: 1350px) {
      padding-left: 40px;
      padding-right: 0;
    }
  }

  .section-slogan {
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
