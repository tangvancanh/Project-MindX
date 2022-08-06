import styled, { keyframes } from "styled-components";

export const SMovieDetail = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .showBackdrop {
    display: block;
  }

  .hideBackdrop {
    display: none;
  }

  .modal {
    position: fixed;
    top: 25%;
    left: 0;
    z-index: 300;
    height: 60%;
    width: 100%;
    margin: 0 auto;
    color: red;
    box-shadow: 0 15px 40px #333232;
    transition: all 0.3s ease;

    .container {
      position: relative;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);

      .movieInfo {
        width: 65%;
        height: 100%;
        padding-left: 24px;
        color: white;
        font-size: 20px;
        padding-top: 25px;

        .closeModal {
          padding: 5px 10px;
          background-color: white;
          border-radius: 6px;
          font-size: 20px;
          cursor: pointer;
          &:hover {
            background-color: red;
          }
        }

        .movieTitle {
          margin-top: 10px;
        }

        .statistical {
          margin-top: 30px;
          display: flex;

          .rating {
            color: green;
          }

          .popularity {
            margin-left: 15px;
            color: yellow;
          }
        }

        .releaseDate {
          margin-top: 10px;
        }

        .overview {
          margin-top: 30px;
          color: #c7c1c1;
          font-size: 18px;
          line-height: 1.4;
        }
      }
    }
  }

  .showModal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.3s ease-in-out;
  }

  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }
`;
