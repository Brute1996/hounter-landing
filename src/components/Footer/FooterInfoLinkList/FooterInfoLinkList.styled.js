import styled from "@emotion/styled";

export const FooterInfoLinkListWrapper = styled.div`
  .links-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    text-transform: capitalize;

    color: #0e1735;

    margin-bottom: 24px;
  }

  .links-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .link {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;
    /* identical to box height */

    text-transform: capitalize;

    /* Neutral / 500 */

    color: #888b97;
  }
`;
