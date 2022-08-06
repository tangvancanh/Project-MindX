import React from "react";
import styled from "styled-components";

const Button = ({text}) => {
  return <SButton>{text}</SButton>;
};

export default Button;

const SButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: green;
    margin: 0 auto;
    margin-top: 30px;
    display: block;
    font-size: 20px;
`;
