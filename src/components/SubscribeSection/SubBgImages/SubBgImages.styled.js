import {
  avatar1,
  avatar15,
  avatar3,
  avatar5,
  subBgImage1,
  subBgImage2,
  subBgImage3,
  subBgImage4,
} from "../../../images";

import styled from "@emotion/styled";

export const SubBgImagesWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .def-image-style {
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    border: 2px solid #fff;
  }

  .bg-image-1 {
    width: 81px;
    height: 81px;

    top: 38px;
    left: 44px;

    border-radius: 24px;
    background-image: url(${subBgImage1});
  }

  .bg-image-2 {
    width: 36px;
    height: 36px;

    top: 71px;
    left: 170px;

    border-radius: 50%;
    background-image: url(${avatar3});

    @media (min-width: 768px) {
      top: 71px;
      left: 150px;
    }

    @media (min-width: 950px) {
      top: 71px;
      left: 204px;
    }
  }

  .bg-image-3 {
    width: 36px;
    height: 36px;

    top: 173px;
    left: 67px;

    border-radius: 50%;
    background-image: url(${avatar1});
  }

  .bg-image-4 {
    width: 54px;
    height: 54px;

    top: 100px;
    left: 245px;

    border-radius: 24px;
    background-image: url(${subBgImage2});

    @media (min-width: 768px) {
      top: 148px;
      left: 145px;
    }

    @media (min-width: 950px) {
      top: 178px;
      left: 195px;
    }
  }

  .bg-image-5 {
    width: 70px;
    height: 70px;

    bottom: 98px;
    right: 200px;

    border-radius: 24px;
    background-image: url(${subBgImage3});

    @media (min-width: 768px) {
      bottom: 198px;
      right: 120px;
    }

    @media (min-width: 950px) {
      bottom: 198px;
      right: 200px;
    }
  }

  .bg-image-6 {
    width: 36px;
    height: 36px;

    bottom: 133px;
    right: 130px;

    border-radius: 50%;
    background-image: url(${avatar15});
    @media (min-width: 950px) {
      bottom: 133px;
      right: 200px;
    }
  }

  .bg-image-7 {
    width: 36px;
    height: 36px;

    bottom: 169px;
    right: 82px;

    border-radius: 50%;
    background-image: url(${avatar5});
  }

  .bg-image-8 {
    width: 55px;
    height: 55px;

    bottom: 60px;
    right: 73px;

    border-radius: 24px;
    background-image: url(${subBgImage4});
  }
`;
