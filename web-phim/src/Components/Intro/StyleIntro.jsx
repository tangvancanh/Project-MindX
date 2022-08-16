import styled from "styled-components";

export const SIntro = styled.div`
  position: relative;
  color: white;
  padding-top: 35%;
  margin-top: 80px;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoIntro {
    position: absolute;
    top: 140px;
    left: 55px;
    user-select: none;

    @media screen and (max-width: 800px) {
      top: 70px;
      left: 20px;
    }
    @media screen and (max-width: 600px) {
      top: 50px;
      left: 15px;
    }

    .headingIntro {
      font-size: 60px;
      transition: all 0.3s ease;

      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 24px;
      }
    }

    .overviewIntro {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;

      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }

  .btnVolume {
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: #ddd8d8;
    border: #fff solid 1px;
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover {
      color: #fff;
      transform: scale(1.2);
      background-color: #b3acac;
    }

    @media screen and (max-width: 800px) {
      height: 30px;
      width: 30px;
      padding: 4px;
    }
    @media screen and (max-width: 600px) {
      height: 20px;
      width: 20px;
      padding: 1px;
    }
  }
`;
