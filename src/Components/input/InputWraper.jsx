import styled from 'styled-components';
import React from 'react';

const InputWrapper = styled.div`
  & {
    background-color: ${(props) => props.Colors.body} !important;
    color: ${(props) => props.Colors.color} !important;
 
  .form-bg {
    margin-top: 70px !important;
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
}
`;
export default InputWrapper;
