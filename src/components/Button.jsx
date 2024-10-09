import React from 'react'
import styled, {css, keyframes} from 'styled-components'

const AnimatedButton = keyframes`
    0% {
        transform: rotateZ(0deg)
    };

    100% {
        transform: rotateZ(360deg)
    }
`

const ButtonStyles = styled.button`
    align-self: flex-end;
    &:hover {
        animation: ${AnimatedButton} 1s;
    }

    ${({myButton}) => myButton && css`
        border: none;
        color: red;
        background: transparent;
        border: 2px solid red;
        padding: 5px;
        width: 100px;
        cursor: pointer;
    `}

`

export const Button = (props) => {
  return (
    <ButtonStyles {...props}/>
  )
}
