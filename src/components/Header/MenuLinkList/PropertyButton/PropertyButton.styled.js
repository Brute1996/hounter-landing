import styled from "@emotion/styled";

export const PropertyButtonWrapper = styled.li`
  position: relative;

  .property-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 999;

    color: #f0f3fd;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28;

    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 32px;
    padding: 8px 16px;

    transition: border-bottom-left-radius 0.2s ease-in-out,
      border-bottom-right-radius 0.2s ease-in-out;

    .property-arrow-icon {
      transition: transform 0.2s ease-in-out;
    }
  }

  .property-button.active {
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    .property-arrow-icon {
      transform: rotate(180deg);
    }
  }

  .property-dropdown-menu {
    position: absolute;
    top: 50%;

    color: #f0f3fd;
    width: 100%;
    padding: 8px 16px 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 0;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;

    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
      top 0.2s ease-in-out;

    &.active {
      position: static;
      top: 100%;
      opacity: 1;
      visibility: visible;
      pointer-events: all;

      @media (min-width: 768px) {
        position: absolute;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
