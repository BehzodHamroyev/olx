import React from 'react';
import styled from 'styled-components';
const ProductsWraper = styled.div`
  & {
    background-color: ${(props) => props.Colors.body} !important;
    color: ${(props) => props.Colors.color} !important;
    .location {
      color: rgba(107, 107, 107, 0.61);
    }
    .shadows {
      box-shadow: 0 4px 8px ${(props) => props.Colors.hoverBackgrounColor} !important;
    }
  }
`;

export default ProductsWraper;
