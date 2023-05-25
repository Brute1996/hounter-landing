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
    width: 100%;
    height: 1000px;
    position: absolute;
    top: -200px;
    left: 0;

    z-index: -999;
    background-image: radial-gradient(
      circle,
      #82ffe8,
      rgba(255, 255, 255, 0) 30%
    );
    background-repeat: no-repeat;
    background-position: -250px -175px;
    opacity: 0.5;

    @media (min-width: 768px) {
      background-position: -450px -175px;
    }

    @media (min-width: 1200px) {
      background-position: -580px -175px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
        circle,
        #c8ff82,
        rgba(255, 255, 255, 0) 35%
      );
      background-repeat: no-repeat;
      background-position: -200px 90px;

      @media (min-width: 768px) {
        background-position: -450px 90px;
      }

      @media (min-width: 1200px) {
        background-position: -600px 90px;
      }
    }
  }
`;
