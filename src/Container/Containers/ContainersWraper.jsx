import React from 'react'
import styled from 'styled-components'
const ContainersWraper=styled.div`
&{
    padding: 100px 0 0 40px;
    min-height: 500px !important;
    background-color: ${props=>props.Colors.body};
    color:${props=>props.Colors.color};
}
`
export default ContainersWraper
