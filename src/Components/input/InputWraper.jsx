import styled from "styled-components";
import React from 'react'

const InputWrapper = styled.div`

  .form-bg {
    margin-top: 70px !important;
    background-color: ${props=>props.colors.backgrounColor} !important;
    color: ${props=>props.colors.color} !important;
  }
  .input {
    border: none;
    outline: none;
    box-shadow: none;
    
  }
  .times {
    position: absolute;
    top: 50%;
    right: 5%;
    display: none;
    transform: translateY(-50%);
  }
  .input::placeholder {
    font-weight: bold;
  }

`;
export default InputWrapper;