import styled from "@emotion/styled";

export const SliderButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;

  .slider-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e0e3eb;
    border-radius: 32px;
    padding: 12px 16px;
    border: none;

    .icon {
      path {
        fill: #3c4563;
      }
    }

    &.prev-btn {
      .icon {
        rotate: 90deg;
      }

      &.on-end {
        background-color: #10b981;

        .icon {
          path {
            fill: #fff;
          }
        }
      }
    }

    &.next-btn {
      .icon {
        rotate: -90deg;
      }

      &.on-start {
        background-color: #10b981;

        .icon {
          path {
            fill: #fff;
          }
        }
      }
    }
  }
`;
