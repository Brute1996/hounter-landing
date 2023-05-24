import styled from "@emotion/styled";

export const ActicleSectionWrapper = styled.section`
  .container {
    position: relative;
  }

  .section-title {
    flex-direction: column;
  }

  .section-slogan {
    max-width: 424px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 24px;
  }

  .more-article-link-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .section-content {
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
      align-items: normal;
      flex-direction: row;
    }

    @media (min-width: 1200px) {
      gap: 68px;
    }
  }

  .gradient-bg {
    width: 600px;
    height: 100%;
    position: absolute;
    top: -150px;
    left: -150px;

    z-index: -999;
    background-image: radial-gradient(
      circle,
      #82ffe8,
      rgba(255, 255, 255, 0) 50%
    );
    background-repeat: no-repeat;
    background-position: -40px -75px;
    opacity: 0.5;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
        circle,
        #c8ff82,
        rgba(255, 255, 255, 0) 55%
      );
      background-repeat: no-repeat;
      background-position: -30px 140px;
    }
  }
`;
