import styled from "styled-components";

export const SIntro = styled.div`
  /* background-color: var(--color-background); */
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
    left: 30px;
    user-select: none;

    .headingIntro {
      font-size: 60px;
      transition: all 0.3s ease;
    }

    .overviewIntro {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;
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
  }
`;
