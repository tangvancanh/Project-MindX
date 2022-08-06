import React from "react";
import styled from "styled-components";

const Input = ({ lable, value, onChange, type = "text" }) => {
  return (
    <SInput>
      <span className="lable">{lable}</span>
      <input type={type} value={value} onChange={onChange} />
    </SInput>
  );
};

export default Input;

const SInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  .lable {
    color: black;
    font-size: 24px;
  }

  input {
    border: none;
    height: 35px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;

    &:focus {
      outline: none;
    }
  }
`;
