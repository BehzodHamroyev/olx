import React from 'react';
import styled from 'styled-components';
const PremiumProductsWraper = styled.div`
  & {
  
    img {
      height: 200px;
    }
    .title {
      font-weight: bold;
      &:hover {
        color: rgb(0, 47, 52);
      }
    }
    .content {
      height: 220px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      font-size: 15px;
    }
    .bottomContent {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
`;
export default PremiumProductsWraper;
