import React from 'react';
import styled from 'styled-components';
const ContainersWraper = styled.div`
  & {
    padding: 100px 0 0 40px;
    min-height: 500px !important;
    background-color: ${(props) => props.Colors.body} !important;
    color: ${(props) => props.Colors.bodyColor} !important ;
    a {
      color: ${(props) => props.Colors.bodyColor} !important ;
      text-decoration: none;
      &:hover {
        color: ${(props) => props.Colors.bodyColor} !important ;
      }
      .heart{
          color:  ${(props) => props.Colors.heart} !important ; 
      }
    }
  }
`;
export default ContainersWraper;
