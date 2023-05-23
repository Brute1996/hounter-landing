import styled from "@emotion/styled";

export const GallerySliderImageStyle = styled.div`
  cursor: zoom-in;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 4px;

  transition: scale 200ms ease-in-out;

  &:hover {
    scale: 1.02;
  }
`;
