import React from 'react'
import styled from 'styled-components'
const FooterWraper=styled.div`
&{
    height: auto;
    padding: 40px 0;
    background-color: ${props=>props.Colors.footerBac} !important;
     color: ${props=>props.Colors.color} !important;

}
 `
 export default FooterWraper;