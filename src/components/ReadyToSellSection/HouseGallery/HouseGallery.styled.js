import styled from "@emotion/styled";
import { videoPreviewImage } from "../../../images";

export const HouseGalleryWrapper = styled.div`
  width: 528px;
  min-height: 459px;
  position: relative;

  .video-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    width: 488px;
    height: 416px;
    border-radius: 4px;

    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      url(${videoPreviewImage});
    background-repeat: no-repeat;
    background-size: 127%;
    background-position: 50% 50%;

    transition: background-size 500ms ease-in-out;

    &:hover {
      cursor: pointer;
      background-size: 140%;
    }

    .player-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 48px;
      height: 48px;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(2.5px);
      border-radius: 50%;
      border: none;

      transition: scale 500ms ease-in-out;
    }

    &:hover .player-btn {
      scale: 1.4;
    }
  }
`;
