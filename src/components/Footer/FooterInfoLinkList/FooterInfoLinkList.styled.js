import styled from "@emotion/styled";

export const FooterInfoLinkListWrapper = styled.div`
  width: 130px;

  @media (min-width: 768px) {
    width: auto;
  }

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

  .link-item {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28;

    /* text-transform: capitalize; */

    color: #888b97;

    a {
      transition: scale 200ms ease-in-out, color 200ms ease-in-out;

      &:hover,
      &:focus {
        color: #10b981;
        scale: 1.05;
      }
    }
  }
`;
