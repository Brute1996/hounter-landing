import styled from "@emotion/styled";
import { subBg } from "../../images";

export const SubscribeSectionWrapper = styled.section`
  .container {
    position: relative;
    padding: 65px 0;
    border-radius: 32px;
    max-width: 1200px;

    background-image: url(${subBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .section-slogan {
    display: flex;
    text-align: center;
    max-width: 424px;
    margin: 0 auto 32px;
  }
`;
