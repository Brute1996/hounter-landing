import styled from "@emotion/styled";

export const OurRecomendationSectionStyle = styled.section`
  .container {
    @media (min-width: 1200px) {
      padding-right: 0;
    }
  }
  .section-content-wrapper {
    @media (min-width: 1250px) {
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

    @media (min-width: 1441px) {
      justify-content: space-around;
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
