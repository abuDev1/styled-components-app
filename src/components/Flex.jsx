import React from 'react'
import styled from 'styled-components'

const Flexed = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction || "column"};
    align-items: ${props => props.align || "stretch"};
    justify-content: ${props => props.justify || "stretch"};
`

export const Flex = (props) => {
  return (
    <Flexed {...props}/>
)
}
