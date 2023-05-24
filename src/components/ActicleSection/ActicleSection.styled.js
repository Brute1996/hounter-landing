import styled from "@emotion/styled";

export const ActicleSectionWrapper = styled.section`
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
`;
