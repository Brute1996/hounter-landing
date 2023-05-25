import styled from "@emotion/styled";
import { subBg } from "../../images";

export const SubscribeSectionWrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    padding: 65px 0;
    border-radius: 32px;
    max-width: 1200px;
    height: 650px;

    background-image: url(${subBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

    @media (min-width: 768px) {
      height: 312px;
    }

    @media (min-width: 1441px) {
      max-width: 1440px;
    }
  }

  .section-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-slogan {
    line-height: 1.5;
    text-align: center;
    max-width: 424px;
    margin-bottom: 32px;
  }
`;
