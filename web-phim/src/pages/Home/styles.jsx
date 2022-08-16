import styled from "styled-components";

export const SScroll = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  font-size: 50px;
  color: #3d3d3b;
  transition: all 0.3s linear;

  &:hover {
    color: #868681;
  }

  @media screen and (max-width: 600px) {
    right: 40px;
  }
`;
