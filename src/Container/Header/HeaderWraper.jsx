import React from 'react'
import styled from 'styled-components'
// import color from '../../data/colors'
const HeaderWraper=styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    top:0;
     left: 0;
     height: 80px;
     width: 100%;
     background-color: ${props=>props.Color.backgroundColor};
     color: ${props=>props.Color.color};
     align-items: center;
     z-index: 1000;

& img{
    width: 80px !important;
}
a{

    text-decoration: none !important;
    font-size: 20px;
}
.User{
    color: grey;
}
.User:hover{
    color: rgba(255, 255, 255, 0.871)

}`
export default HeaderWraper