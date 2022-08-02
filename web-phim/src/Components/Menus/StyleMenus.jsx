import styled from "styled-components";

export const SMenus = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width: 40px;
  padding: 4px 0px;
  background-color: #1b1a1a;
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;
  &:hover {
    width: 200px;
    background: #3d3c3c;
  }

  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;

    .icon {
      font-size: 25px;
      margin-right: 8px;
    }

    span {
      font-size: 20px;
      font-weight: 400;
      color: #b8b8b2;
      &:hover {
        color: white;
      }
    }
  }
`;
