import styled from "styled-components";

export const SSearchMovie = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
  transition: all 0.3s linear;

  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(5, auto);

    &:hover .movieItem {
      opacity: 0.7;
    }

    .movieItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 12px;
      margin: 20px 0;
      overflow: hidden;
      transform: scale(1);
      transition: all 0.3s linear;

      &:hover {
        transform: scale(1.2);
        z-index: 10;
        opacity: 1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        padding: 4px;
        font-weight: bold;
      }
    }
  }

  .notFound {
    padding: 5rem 8rem;
  }
`;
