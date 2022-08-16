import styled from "styled-components";

export const SNavigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 10;

  .navContainer {
    display: flex;
    justify-content: space-between;
    padding: 0px 25px;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      height: 100px;
    }

    .navLeft {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100%;

      .logo {
        width: 120px;
        cursor: pointer;

        img {
          width: 100%;
        }
      }

      .navSearch {
        color: white;
        display: flex;
        padding: 25px 10px;
        justify-content: flex-end;

        &:hover .iconSearch {
          color: #e50914;
        }

        .iconSearch {
          width: 20px;
          height: 20px;
          cursor: pointer;
          transform: translateX(30px) translateY(10px);
          color: #888585;
        }

        input {
          font-size: 14px;
          border: 1px solid white;
          color: white;
          width: 0;
          padding: 10px 10px 10px 20px;
          cursor: pointer;
          outline: 0;
          opacity: 0;
          background-color: var(--color-background);
          transition: width 0.5s;

          &:focus {
            padding-left: 40px;
            width: 300px;
            cursor: text;
            opacity: 1;
            border-radius: 5px;
          }
        }
      }
    }
    .navRight {
      display: flex;
      align-items: center;
      justify-content: center;

      .nameID {
        padding: 0px 10px;
        margin-right: 15px;
        padding: 5px 10px;
        background-color: #858282;
        font-size: 20px;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
          background-color: green;
        }
      }

      .sign-in-up {
        margin-right: 20px;

        .sign-in {
          background-color: #f78543;
          border: 1px solid yellow;
          padding: 5px 10px;
          margin-right: 5px;
          border-radius: 5px;
          &:hover {
            background-color: #e95906;
          }
        }

        .sign-up {
          background-color: #f78543;
          border: 1px solid yellow;
          padding: 5px 10px;
          border-radius: 5px;
          &:hover {
            background-color: #e95906;
          }
        }

        .log-out {
          background-color: #f78543;
          border: 1px solid yellow;
          padding: 5px 10px;
          border-radius: 5px;
          &:hover {
            background-color: #e95906;
          }
        }
      }

      .toggleButton {
        width: 60px;
        height: 30px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2px 4px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        background: white;

        .checkboxButton {
          height: 0;
          width: 0;
          opacity: 0;
        }

        .checkboxButton:checked ~ .circle {
          transform: translateX(-28px);
        }

        .checkboxButton:checked ~ .iconButton {
          transform: translateX(28px);
        }

        .iconButton {
          font-size: 20px;
          margin-top: 5px;
          transition: all 0.2s ease;
        }

        .circle {
          width: 24px;
          height: 24px;
          background: #141313;
          border-radius: 50%;
          transform: all 0.2s ease;
        }
      }
    }
  }
`;
