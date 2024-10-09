import React from 'react'
import styled from 'styled-components'

const TitleStyles = styled.div`
    font-size: 30px;
    color: ${props => props.color || "green"};
    text-align: center;
`

export const Title = (props) => {
  return (
    <TitleStyles {...props}/>
  )
}
