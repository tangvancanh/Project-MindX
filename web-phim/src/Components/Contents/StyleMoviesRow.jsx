import styled from "styled-components";

export const SMoviesContainer = styled.div`
  padding: 25px 20px 0px;
  position: relative;
  width: 100%;
  height: 100%;

  .heading {
    font-size: 30px;
    user-select: none;
    margin-left: 45px;
  }

  .moviesList {
    display: grid;
    grid-template-columns: repeat(${(props) => props.movie}, 300px);
    gap: 6px;
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    padding: 28px 0px;
    scroll-behavior: smooth;

    &:hover .movieItem {
      opacity: 0.5;
    }

    .movieItem {
      transform: scale(1);
      max-width: 300px;
      max-height: 450px;
      width: 100%;
      height: 100%;
      transition: all 0.3s linear;
      user-select: none;
      overflow: hidden;
      border-radius: 8px;
      transform: center left;
      position: relative;
      cursor: pointer;

      &:hover {
        opacity: 1;
        transform: scale(1.1);
        z-index: 8;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .movieName {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        font-size: 20px;
        padding: 4px;
        background-color: #f1a363;
      }
    }
  }

  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 9;
    transform-origin: center;
    cursor: pointer;
    width: 40px;
    height: 50px;
    background-color: #1b1a1a;
    border-radius: 5px;
    display: flex;
    align-items: center;
    transform: translateY(-40%);

    &:hover {
      background-color: #3d3c3c;
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }

    &.isPoster {
      height: 100px;
      width: max-content;
    }
  }

  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 9;
    transform-origin: center;
    cursor: pointer;
    width: 40px;
    height: 50px;
    background-color: #1b1a1a;
    border-radius: 5px;
    display: flex;
    align-items: center;
    transform: translateY(-40%);

    &:hover {
      background-color: #3d3c3c;
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }

    &.isPoster {
      height: 100px;
      width: max-content;
    }
  }
`;
