import React from 'react'
import styled from 'styled-components'

const Background = styled.rect`
    fill: #333;
`
const Scene = ({children}) => {
  return (
    <svg viewBox="0 0 10 1">
      <Background x='0' y='0' width={20} height={1}/>
      {children}
    </svg>
  )
}

export default Scene