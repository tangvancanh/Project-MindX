import styled from "styled-components";

export const SSignIn = styled.div`
  .logo {
    position: fixed;
    top: 0;
    width: 100px;
    cursor: pointer;
    margin: 12px 25px;

    img {
      width: 100%;
    }
  }

  .form {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      width: 100%;
      max-width: 400px;
      padding: 20px;
      background-color: white;
      border-radius: 6px;

      .title {
        text-align: center;
        color: black;
      }

      .form-content {
        margin-bottom: 20px;
      }

      .link {
        color: red;
        font-size: 20px;
        display: flex;
        justify-content: flex-end;
        &:hover {
          color: green;
        }
      }
    }
  }
`;
